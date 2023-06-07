from django.shortcuts import render
from rest_framework import generics

from file_tasks.models import FileTasks
from file_tasks.serializers import CreateFileTasksSerializers, CreateFileTasksGradeSerializers, \
    CreateFileTasksAnswerSerializers, FileTasksSerializers, FileTasksAnswerSerializers, FileTasksGradeSerializers


class FileTasksCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers

class FileTasksGradeCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers

class FileTasksAnswerCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers

class FileTasksRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksSerializers

class FileTasksAnswerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksAnswerSerializers

class FileTasksGradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksGradeSerializers