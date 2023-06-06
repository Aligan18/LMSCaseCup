from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from teachers.models import Teachers
from teachers.serializers import CreateTeachersSerializers, TeachersSerializers, AboutTeachersSerializers


class TeachersView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teachers.objects.all()
    serializer_class = TeachersSerializers


class CreateStudentsView(generics.CreateAPIView):
    queryset = Teachers.objects.all()
    serializer_class = CreateTeachersSerializers


class AllStudentsView(generics.ListAPIView):
    queryset = Teachers.objects.all()
    serializer_class = AboutTeachersSerializers
