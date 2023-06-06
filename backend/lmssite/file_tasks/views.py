from django.shortcuts import render
from rest_framework import generics

from file_tasks.models import FileTasks
from file_tasks.serializers import CreateFileTasksSerializers, CreateFileTasksGradeSerializers, \
    CreateFileTasksAnswerSerializers, FileTasksSerializers, FileTasksAnswerSerializers, FileTasksGradeSerializers


class FileTasksViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers

class FileTasksGradeViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers

class FileTasksAnswerViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers

class FileTasksViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksSerializers

class FileTasksAnswerViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksAnswerSerializers

class FileTasksGradeViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksGradeSerializers