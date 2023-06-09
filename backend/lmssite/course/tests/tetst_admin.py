from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from lectures.models import Lectures


class LecturesTestsGuest(APITestCase):
    props = {'title': 'newTitle',
             'content': 'newContent'}
    count = 0

    def test_lectures_create(self):
        self.count = self.count + 1
        url = reverse('lectures-create')

        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Lectures.objects.count(), 1)
        self.assertEqual(Lectures.objects.get().title, 'newTitle')

        url = reverse('lectures-rud', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        self.assertEqual(Lectures.objects.count(), 1)
        self.assertEqual(Lectures.objects.get().title, 'newTitle')

        url = reverse('lectures-rud', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Lectures.objects.count(), 1)
        self.assertEqual(Lectures.objects.get().title, 'updated')

        url = reverse('lectures-rud', kwargs={'pk': 1})

        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Lectures.objects.count(), 0)


