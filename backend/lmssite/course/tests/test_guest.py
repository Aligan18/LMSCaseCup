from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from lectures.models import Lectures


class LecturesTestsGuest(APITestCase):
    props = {'title': 'newTitle',
             'content': 'newContent'}

    def test_lectures_create(self):

        # POST
        url = reverse('lectures-create')   ##
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Lectures.objects.count(), 0)
        # self.assertEqual(Lectures.objects.get().title, 'newTitle')

        # GET ONE
        url = reverse('lectures-rud', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        data = response.data
        self.assertEqual(Lectures.objects.count(), 0)
        # self.assertEqual(data.title, 'newTitle')

        # UPDATE
        url = reverse('lectures-rud', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Lectures.objects.count(), 0)
        # self.assertEqual(Lectures.objects.get().title, 'updated')

        # DELETE
        url = reverse('lectures-rud', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Lectures.objects.count(), 0)
