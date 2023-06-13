from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

import mysite
from course.models import Course
from course.serializers import CreateCourseSerializers, AboutCourseSerializers, CategorySerializers, CourseSerializers
from django_filters.rest_framework import DjangoFilterBackend

from custom_user.permissions import IsTeacherHasAccess
from .service import CategoryFilter


# Admin
class CourseViewCreate(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = [IsAdminUser]


# All
class CourseViewListByCategory(generics.ListAPIView):  # фильтрация по категориям
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter
    permission_classes = [AllowAny]


# All
class CourseViewList(generics.ListAPIView):  # все  курсы
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    permission_classes = [AllowAny]


# All
class CourseViewRetrieve(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializers
    permission_classes = [AllowAny]


# Admin , Teacher имеющий доступ
class CourseViewUpdate(generics.UpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]


# Admin
class CourseViewDestroy(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
    permission_classes = [IsAdminUser]
