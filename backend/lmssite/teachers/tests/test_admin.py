from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from mysite.global_test.create_user import create_admin, create_student, create_teacher, course_props, create_course
from students.models import Students
from teachers.models import Teachers


class CoursesTestsGuest(APITestCase):
    def setUp(self):
        self.student_user, self.student_profile = create_student("student")
        self.student_not_access, self.student_profile2 = create_student("not_access")
        self.admin, self.admin_profile = create_admin("admin")
        self.teacher_user, self.teacher_profile = create_teacher("teacher")
        self.teacher_not_access, self.teacher_profile2 = create_teacher("teacher_not_access")

        # Create course
        teachers_id = [self.teacher_user.id]
        students_id = [self.student_user.id]
        course = create_course('newTitle', teachers_id, students_id)
        self.teacher_profile.courses.set([course])
        self.student_profile.courses.set([course])

        self.course_id = course.id

    def test_course(self):
        self.client.force_authenticate(user=self.admin)
        # GET All
        url = reverse('teachers-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA ", data)
        self.assertEqual(Teachers.objects.count(), 2)

        # GET ONE
        url = reverse('teachers-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(Teachers.objects.count(), 2)
        # self.assertEqual(data.get("name", ""), 'student')

        # UPDATE
        url = reverse('teachers-rud', kwargs={'pk': 1})
        update_data = {'name': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Teachers.objects.count(), 2)
        self.assertEqual(Teachers.objects.get(id=1).name, 'updated')

        # DELETE
        url = reverse('teachers-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Teachers.objects.count(), 1)
