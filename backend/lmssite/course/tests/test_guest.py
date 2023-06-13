from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from categories.models import Category
from course.models import Course
from custom_user.models import User
from lectures.models import Lectures
from students.models import Students
from teachers.models import Teachers


class CoursesTestsGuest(APITestCase):
    def setUp(self):

        Category.objects.create(title="Course")

        admin = User.objects.create_user(
            login='admin',
            email='admin@gmail.com',
            password='qwer1234',
            is_staff=1,
            type='2'
        )
        user_teacher = User.objects.create_user(
            login='teacher',
            email='teacher@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='3'
        )
        user_student = User.objects.create_user(
            login='student',
            email='student@gmail.com',
            password='qwer1234',
            is_staff=0,
            type='4'
        )
        teacher = Teachers.objects.create(
            teacher=user_teacher,
            name='teacher',
        )
        student = Students.objects.create(
            student=user_student,
            name='student',
        )
        self.props = {'title': 'newTitle',
                      'content': 'newContent',
                      'teacher': [1],
                      'student': [1],
                      # 'category': '1',
                      }

        self.client.force_authenticate(user=admin)

        # POST create course
        url = reverse('course-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        self.client.logout()

        course = Course.objects.filter(id=1)
        teacher.courses.set(course)
        student.courses.set(course)

    def test_course(self):
        # POST
        url = reverse('course-create')
        response = self.client.post(url, self.props, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Course.objects.count(), 1)
        # self.assertEqual(Lectures.objects.get().title, 'newTitle')

        # GET All
        url = reverse('course-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA ", data)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(len(data), 1)

        # GET ONE
        url = reverse('course-id', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        print("THIS IS DATA2 ", data)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(data.get("title", ""), 'newTitle')

        # UPDATE
        url = reverse('course-update', kwargs={'pk': 1})
        update_data = {'title': 'updated'}
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Course.objects.count(), 1)
        self.assertEqual(Course.objects.get().title, 'newTitle')

        # DELETE
        url = reverse('course-delete', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Course.objects.count(), 1)
