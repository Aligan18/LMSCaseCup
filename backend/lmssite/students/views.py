from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from students.models import Students
from students.serializers import StudentsSerializers, CreateStudentsSerializers, AboutStudentsSerializers


class StudentsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentsSerializers


class CreateStudentsView(generics.CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = CreateStudentsSerializers


class AllStudentsView(generics.CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = AboutStudentsSerializers
