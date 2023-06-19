import datetime

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from course.models import Course
from file_tasks.models import FileTasksAnswer

from mysite.global_test.create_user import create_admin, create_student, create_teacher, course_props, create_course, \
    file_tasks_answer_props, create_list_modules


class CoursesTestsGuest(APITestCase):
    def setUp(self):
        self.admin, self.admin_profile = create_admin("admin")
        self.student_user, self.student_profile = create_student("student")
        self.student_not_owner, self.student_profile2 = create_student("not_owner")
        self.teacher_user, self.teacher_profile = create_teacher("teacher")
        self.teacher_not_owner, self.teacher_profile2 = create_teacher("not_owner_teacher")

        # Create course
        teachers_id = [self.teacher_user.id]
        students_id = [self.student_user.id]
        course = create_course('newTitle', teachers_id, students_id)
        self.teacher_profile.courses.set([course])
        self.student_profile.courses.set([course])

        # Create list module
        list_modules = create_list_modules('newTitle', datetime.datetime.now())

        course_id = course.id
        list_modules_id = list_modules.id
        self.file_tasks_answer_props = file_tasks_answer_props(course_id, list_modules_id, students_id[0])

        self.client.force_authenticate(user=self.student_user)

        # POST create file tasks
        url = reverse('file_tasks_answer-create')
        print(url)
        response = self.client.post(url, self.file_tasks_answer_props, format='json')
        data = response.data
        print("THIS IS Start ", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(FileTasksAnswer.objects.count(), 1)
        # self.assertEqual(FileTasksAnswer.objects.get().title, 'newTitle')

        self.client.logout()

    def test_teacher_owner(self):
        self.client.force_authenticate(user=self.teacher_user)
        # GET All
        url = reverse('file_tasks_answer-list') + f'?course=1'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA ", data)
        self.assertEqual(FileTasksAnswer.objects.count(), 1)


        # GET ONE
        url = reverse('file_tasks_answer-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(FileTasksAnswer.objects.count(), 1)
        # self.assertEqual(data.get("title", ""), '')

        # UPDATE
        url = reverse('file_tasks_answer-rud', kwargs={'pk': 1})
        update_data = {'is_late': True}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(FileTasksAnswer.objects.count(), 1)
        self.assertEqual(FileTasksAnswer.objects.get().is_late, True)

        # DELETE
        url = reverse('file_tasks_answer-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(FileTasksAnswer.objects.count(), 1)