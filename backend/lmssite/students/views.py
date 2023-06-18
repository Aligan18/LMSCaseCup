from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from custom_user.permissions import IsTeacherHasAccess, IsStudentOwner, IsTeacherHasAccessCreate
from mysite.pagination import ListPagination

from students.models import Students
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers


# Admin
class StudentsViewAll(generics.ListAPIView):  # Вообще все студенты
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = [IsAdminUser]
    pagination_class = ListPagination


#############################################################################################
# Admin, Teacher с доступом к курсу
class StudentsCourseViewAll(generics.ListAPIView):  # Студенты определенного курса
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]
    pagination_class = ListPagination


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

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()