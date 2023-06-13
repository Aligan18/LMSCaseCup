from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from custom_user.permissions import IsTeacherHasAccess, IsStudentOwner

from students.models import Students
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers


# Admin
class StudentsViewAll(generics.ListAPIView):  # Вообще все студенты
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = [IsAdminUser]


#############################################################################################
# Admin, Teacher с доступом к курсу
class StudentsCourseViewAll(generics.ListAPIView):  # Студенты определенного курса
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = []


#############################################################################################

# Authorized
class StudentsViewRetrieve(generics.RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = [IsAuthenticated]


# Student свой профиль
class StudentsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = [IsAdminUser | IsStudentOwner]


# # Admin,  Student свой профиль
# class StudentsViewDestroy(generics.DestroyAPIView):
#     queryset = Students.objects.all()
#     serializer_class = CreateStudentsSerializers
#     permission_classes = [IsAdminUser | IsStudentOwner]
