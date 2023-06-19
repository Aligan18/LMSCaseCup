from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from course.models import Course

from list_modules.models import ListModules
from mysite.global_test.create_user import create_course, create_student, create_teacher, create_admin


class ListModuleTestsAdmin(APITestCase):
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

        self.props = {'title': 'newTitle',
                      'course': 1,
                      }
        self.client.force_authenticate(user=self.admin)

        # POST create course
        url = reverse('listmodules-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        self.client.logout()

    def test_course(self):
        # POST
        url = reverse('listmodules-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(ListModules.objects.count(), 1)
        self.assertEqual(ListModules.objects.get(id=1).title, 'newTitle')

        # GET All
        url = reverse('listmodules-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        print("THIS IS DATA ", data)
        self.assertEqual(ListModules.objects.count(), 1)
        self.assertEqual(len(data), 1)

        # GET ONE
        url = reverse('listmodules-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(ListModules.objects.count(), 1)
        # self.assertEqual(len(data), 0)

        # UPDATE
        url = reverse('listmodules-rud', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(ListModules.objects.count(), 1)
        self.assertEqual(ListModules.objects.get(id=1).title, 'newTitle')

        # DELETE
        url = reverse('listmodules-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(ListModules.objects.count(), 1)
