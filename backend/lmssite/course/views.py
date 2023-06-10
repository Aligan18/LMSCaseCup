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



    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


class CourseDeleteView(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = DeleteCourseSerializers


class CourseUpdateView(generics.UpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers


class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter


class CourseListViewRetrieve(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
