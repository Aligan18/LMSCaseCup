from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from admins.models import Admins
from course.models import Course
from custom_user.models import User
from lectures.models import Lectures


class LecturesTestsGuest(APITestCase):
    user = User.objects.create_user(
        login='admin',
        email='admin@gmail.com',
        password='qwer1234',
        is_staff=1,
        type='2'
    )

    admin = Admins.objects.create(
        user=user,
        name='admin'

    )

    def test_admin_guest(self):

        # GET ONE
        url = reverse('course-ret', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        self.assertEqual(Course.objects.count(), 0)
        # self.assertEqual(data.title, 'newTitle')

        # UPDATE
        url = reverse('course-update', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Course.objects.count(), 0)
        # self.assertEqual(Lectures.objects.get().title, 'updated')

        # DELETE
        url = reverse('course-delete', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Course.objects.count(), 0)
