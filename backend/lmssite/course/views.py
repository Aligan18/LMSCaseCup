from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

import mysite
from course.models import Course
from course.serializers import CreateCourseSerializers, AboutCourseSerializers, CategorySerializers
from django_filters.rest_framework import DjangoFilterBackend

from mysite.permissions import IsTeacherAdmin, IsOwnerTeacherAdmin

from .service import CategoryFilter


# Admin , Teacher
class CourseViewCreate(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = (IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# All
class CourseViewList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter
    permission_classes = (AllowAny,)


# All
class CourseViewRetrieve(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
    permission_classes = (IsAuthenticated,)


# Admin , Teacher автор курса
class CourseViewUpdate(generics.UpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = (IsOwnerTeacherAdmin,)


# Admin
class CourseViewDelete(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = (IsAdminUser,)