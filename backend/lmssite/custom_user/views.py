from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from lectures.models import Lectures
from lectures.serializers import CreateLecturesSerializers
from list_modules.permissions import IsOwnerTeacherOrIsAdmin


class CreateTESTView(generics.ListCreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = [IsOwnerTeacherOrIsAdmin]


class TESTView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = [IsOwnerTeacherOrIsAdmin]
