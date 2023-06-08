from django.shortcuts import render
from rest_framework import generics

from file_tasks.models import FileTasks
from file_tasks.serializers import CreateFileTasksSerializers, CreateFileTasksGradeSerializers, \
    CreateFileTasksAnswerSerializers, FileTasksSerializers, FileTasksAnswerSerializers, FileTasksGradeSerializers
from mysite import permissions


class FileTasksCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers
    permission_classes = (permissions.IsAdminTeacher,)

class FileTasksGradeCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers
    permission_classes = (permissions.IsAdminTeacher,)


class FileTasksAnswerCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers
    permission_classes = (permissions.IsAdminTeacher,)


class FileTasksRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksSerializers

class FileTasksAnswerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksAnswerSerializers

class FileTasksGradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksGradeSerializers