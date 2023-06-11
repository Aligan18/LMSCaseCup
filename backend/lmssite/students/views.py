from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from mysite.permissions import IsStudentAdmin
from students.models import Students
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers


# НЕ Используется
class StudentsViewCreate(generics.CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = (IsAdminUser,)


# Admin
class StudentsViewAll(generics.ListAPIView):  # Вообще все студенты
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = (IsAuthenticated,)


# Admin, Teacher  автор курса
class StudentsViewAll(generics.ListAPIView):  # Студенты определенного курса
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = (IsAuthenticated,)


# Authorized
class StudentsViewRetrieve(generics.RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = (IsStudentAdmin,)


# Student свой профиль
class StudentsViewUpdate(generics.UpdateAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = (IsStudentAdmin,)


# Admin,  Student свой профиль
class StudentsViewDestroy(generics.DestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = (IsStudentAdmin,)
