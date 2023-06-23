from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from custom_user.permissions import IsTeacherHasAccess, IsStudentOwner, IsTeacherHasAccessCreate, IsTeacher
from mysite.pagination import ListPagination

from students.models import Students, CourseStudent
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers, \
    CourseStudentSerializers


# Admin  Teacher
class StudentsViewAll(generics.ListAPIView):  # Вообще все студенты
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = [IsAdminUser | IsTeacher]
    pagination_class = ListPagination


# Authorized
class StudentsViewRetrieve(generics.RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = [IsAuthenticated]


# Admin ,  Student свой профиль
class StudentsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = [IsAdminUser | IsStudentOwner]


class CourseStudentViewAll(generics.CreateAPIView):  # Вообще все студенты
    queryset = CourseStudent.objects.all()
    serializer_class = CourseStudentSerializers





