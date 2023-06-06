from django.shortcuts import render
from rest_framework import generics

from lectures.models import Lectures
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers


class LecturesViewCreate(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers


class LecturesViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
