from django.shortcuts import render
from rest_framework import generics

from lectures.models import Lectures
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers
from mysite import permissions


class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = (permissions.IsAdminTeacher,)



class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
    permission_classes = (permissions.IsAdminTeacher,)

