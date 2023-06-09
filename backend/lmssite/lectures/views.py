from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from course.permissions import IsTeacherAdmin
from lectures.models import Lectures
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers
from list_modules.permissions import IsOwnerTeacherOrIsAdmin


class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = [IsTeacherAdmin]


class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
    permission_classes = [IsAdminUser]