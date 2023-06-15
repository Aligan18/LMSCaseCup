from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

import mysite
from course.models import Course
from course.serializers import CreateCourseSerializers, CategorySerializers, CourseSerializers, \
    OnlyStudentsCourseSerializers
from django_filters.rest_framework import DjangoFilterBackend

from custom_user.permissions import IsTeacherHasAccess, IsStudentHasAccess
from .about_serializers import AboutCourseSerializers
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
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter
    permission_classes = [AllowAny]


# All
class CourseViewRetrieve(generics.RetrieveAPIView): # Описание курса
    queryset = Course.objects.all()
    serializer_class = CourseSerializers
    permission_classes = [AllowAny]


# Admin , Teacher имеющий доступ , Student имеющий доступ
# class CourseViewRetrieve(generics.RetrieveAPIView): # Список студентов
#     queryset = Course.objects.all()
#     serializer_class = OnlyStudentsCourseSerializers
#     permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


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
