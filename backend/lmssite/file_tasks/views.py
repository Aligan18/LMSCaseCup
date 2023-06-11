from django.shortcuts import render
from rest_framework import generics

from file_tasks.models import FileTasks
from file_tasks.serializers import CreateFileTasksSerializers, CreateFileTasksGradeSerializers, \
    CreateFileTasksAnswerSerializers, FileTasksSerializers, FileTasksAnswerSerializers, FileTasksGradeSerializers, \
    AboutFileTasksSerializers, AboutFileTasksGradeSerializers, AboutFileTasksAnswerSerializers
from mysite import permissions


######################################################################################################

# Admin , Teacher
class FileTasksViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin
class FileTasksViewList(generics.ListAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = AboutFileTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор курса  , Student ученик курса
class FileTasksViewRetrieve(generics.RetrieveAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор курса
class FileTasksViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


######################################################################################################

# Admin , Teacher автор задания
class FileTasksGradeViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin , Teacher автор задания
class FileTasksGradeViewList(generics.ListAPIView):  # оценки всех учеников
    queryset = FileTasks.objects.all()
    serializer_class = AboutFileTasksGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания , student выполневший задания
class FileTasksGradeViewRetrieve(generics.RetrieveAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания
class FileTasksGradeViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


######################################################################################################

# Student который проходит курс
class FileTasksAnswerViewCreate(generics.CreateAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers
    permission_classes = (permissions.IsStudentAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()


# Admin , Teacher автор задания
class FileTasksAnswerViewList(generics.ListAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = AboutFileTasksAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


# Admin , Teacher автор задания ,Student автор ответа
class FileTasksAnswerViewRetrieve(generics.RetrieveAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = FileTasksAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)

# Student автор ответа
class FileTasksAnswerViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileTasks.objects.all()
    serializer_class = CreateFileTasksAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)

######################################################################################################
