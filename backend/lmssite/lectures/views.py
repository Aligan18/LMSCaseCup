from django.shortcuts import render
from rest_framework import generics

from lectures.models import Lectures
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers


class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers


class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
