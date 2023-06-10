from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny

import mysite
from course.models import Course
from course.serializers import CreateCourseSerializers, AboutCourseSerializers, CategorySerializers, \
    DeleteCourseSerializers, UpdateCourseSerializers
from django_filters.rest_framework import DjangoFilterBackend

from .permissions import IsTeacherAdmin, IsOwnerTeacherAdmin

from mysite import permissions

from .service import CategoryFilter


class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers

<<<<<<< HEAD

=======
    permission_classes = (IsTeacherAdmin,)
>>>>>>> bab3291083e609a331d6dcd4087d272b28e6df72

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


class CourseDeleteView(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = DeleteCourseSerializers


class CourseUpdateView(generics.UpdateAPIView):
    queryset = Course.objects.all()
<<<<<<< HEAD
    serializer_class = CreateCourseSerializers
=======

    serializer_class = UpdateCourseSerializers
    permission_classes = (IsOwnerTeacherAdmin,)
>>>>>>> bab3291083e609a331d6dcd4087d272b28e6df72


class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter
<<<<<<< HEAD


class CourseListViewRetrieve(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
=======
    permission_classes = (AllowAny,)
>>>>>>> bab3291083e609a331d6dcd4087d272b28e6df72
