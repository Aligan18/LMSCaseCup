from django.shortcuts import render
from rest_framework import generics

from file_tasks.models import FileTasks
from file_tasks.serializers import CreateFileTasksSerializers, CreateFileTasksGradeSerializers, \
    CreateFileTasksAnswerSerializers, FileTasksSerializers, FileTasksAnswerSerializers, FileTasksGradeSerializers
from mysite import permissions


class FileTasksCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

class FileTasksGradeCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


class FileTasksAnswerCreateView(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers
    permission_classes = (permissions.IsStudentAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()


class FileTasksRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class FileTasksAnswerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


class FileTasksGradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)
