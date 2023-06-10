from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from mysite.permissions import IsStudentAdmin
from students.models import Students
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers


class StudentsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializers
    permission_classes = (IsStudentAdmin,)


class StudentsViewCreate(generics.CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers
    permission_classes = (IsAdminUser,)



class StudentsViewAll(generics.ListAPIView):
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
    permission_classes = (IsAuthenticated,)

