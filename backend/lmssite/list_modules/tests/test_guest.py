from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from categories.models import Category
from course.models import Course
from custom_user.models import User
from list_modules.models import ListModules
from students.models import Students
from teachers.models import Teachers


class ListModuleTestsAdmin(APITestCase):
    def setUp(self):
        self.admin = User.objects.create_user(
            login='admin',
            email='admin@gmail.com',
            password='qwer1234',
            is_staff=1,
            type='2'
        )

        self.user_student = User.objects.create_user(
            login='student',
            email='student@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='4'
        )
        student = Students.objects.create(
            student=self.user_student,
            name='student',
        )

        self.user_teacher1 = User.objects.create_user(
            login='teacher1',
            email='teacher1@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='3'
        )
        teacher1 = Teachers.objects.create(
            teacher=self.user_teacher1,
            name='teacher1',
        )

        self.props = {'title': 'newTitle',
                      'course': 1,
                      }
        course = Course.objects.create(title='newTitle',
                                       content='newContent',
                                       # 'category': '1',
                                       )
        self.client.force_authenticate(user=self.admin)

        # POST create course
        url = reverse('listmodules-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        self.client.logout()

        course.teacher.set([teacher1])
        course.student.set([student])
        teacher1.courses.set([course])
        student.courses.set([course])

    def test_course(self):
        self.client.force_authenticate(user=self.user_student)
        # POST
        url = reverse('listmodules-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ListModules.objects.count(), 1)
        self.assertEqual(ListModules.objects.get(id=1).title, 'newTitle')

        # # GET All
        # url = reverse('listmodules-list')
        # response = self.client.get(url)
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # data = response.data
        # print("THIS IS DATA ", data)
        # self.assertEqual(ListModules.objects.count(), 2)
        # self.assertEqual(len(data), 2)

        # GET ONE
        url = reverse('listmodules-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(ListModules.objects.count(), 1)
        # self.assertEqual(len(data), 0)

        # UPDATE
        url = reverse('listmodules-rud', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(ListModules.objects.count(), 1)
        self.assertEqual(ListModules.objects.get(id=1).title, 'newTitle')

        # DELETE
        url = reverse('listmodules-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(ListModules.objects.count(), 1)
