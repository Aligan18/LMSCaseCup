from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from course.models import Course
from custom_user.models import User
from lectures.models import Lectures


class CourseTestsStudent(APITestCase):
    def setUp(self):
        self.props = {'title': 'newTitle',
                      'content': 'newContent',
                      }
        teacher = User.objects.create_user(
            login='teacher',
            email='teacher@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='3'
        )
        self.client.force_authenticate(user=teacher)

        url = reverse('course-create')

        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        self.client.logout()

    def test_lectures_create(self):
        student = User.objects.create_user(
            login='adimin',
            email='admin@gmail.com',
            password='qwer1234',
            is_staff=1,
            type='2'
        )
        self.client.force_authenticate(user=student)

        url = reverse('course-create')

        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 0)

        url = reverse('course-ret', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        url = reverse('course-update', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'updated')

        url = reverse('course-delete', kwargs={'pk': 1})

        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 0)
