import datetime

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from course.models import Course
from file_tasks.models import FileTasksGrade

from mysite.global_test.create_user import create_admin, create_student, create_teacher, course_props, \
    file_tasks_grade_props, create_course, test_grade_props, create_test_tasks, create_list_modules
from test_tasks.models import TestGrade


class FileTasksTestsGuest(APITestCase):
    def setUp(self):
        self.admin, self.admin_profile = create_admin("admin")
        self.student_user, self.student_profile = create_student("student")
        self.teacher_user, self.teacher_profile = create_teacher("teacher")

        # Create course
        teachers_id = [self.teacher_user.id]
        students_id = [self.student_user.id]
        course = create_course('newTitle', teachers_id, students_id)
        self.teacher_profile.courses.set([course])
        self.student_profile.courses.set([course])
        course_id = course.id

        # Create  test task
        test_tasks = create_test_tasks('newTitle', course)

        # Create list modules
        list_modules = create_list_modules('newTitle', datetime.datetime.now())
        self.test_grade_props = test_grade_props(1, course_id, students_id[0], test_tasks.id , list_modules.id)

        self.client.force_authenticate(user=self.student_user)

        # POST create course
        url = reverse('test_tasks_grade-create')
        response = self.client.post(url, self.test_grade_props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TestGrade.objects.count(), 1)
        self.assertEqual(TestGrade.objects.get().grade, 1)

        self.client.logout()

    def test_course(self):
        # POST
        url = reverse('test_tasks_grade-create')
        response = self.client.post(url, self.test_grade_props, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(TestGrade.objects.count(), 1)
        # self.assertEqual(Lectures.objects.get().title, 'newTitle')

        # GET All
        url = reverse('test_tasks_grade-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        print("THIS IS DATA ", data)
        self.assertEqual(TestGrade.objects.count(), 1)
        self.assertEqual(len(data), 1)

        # GET ONE
        url = reverse('test_tasks_grade-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(TestGrade.objects.count(), 1)
        self.assertEqual(data.get("grade", ""), "")

        # UPDATE
        url = reverse('test_tasks_grade-rud', kwargs={'pk': 1})
        update_data = {'comment': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(TestGrade.objects.count(), 1)
        self.assertEqual(TestGrade.objects.get().grade, 1)

        # DELETE
        url = reverse('test_tasks_grade-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(TestGrade.objects.count(), 1)
