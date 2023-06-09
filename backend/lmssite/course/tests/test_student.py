from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from course.models import Course
from custom_user.models import User
from lectures.models import Lectures


class LecturesTestsStudent(APITestCase):
    def setUp(self):
        self.props = {'title': 'title', 'rating': 1, }

    def test_lectures_create(self):
        user = User.objects.create_user(
            email='teacher@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='3'
        )

        self.client.force_authenticate(user=user)

        url = reverse('course-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # self.assertEqual(response.user.type, '3')
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'title')

        url = reverse('course-rud', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'title')

        url = reverse('course-rud', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'updated')

        url = reverse('course-rud', kwargs={'pk': 1})

        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Course.objects.count(), 0)
