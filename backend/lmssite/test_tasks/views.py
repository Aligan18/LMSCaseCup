from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from mysite import permissions
from test_tasks.models import TestTasks, TestQuestionAnswer, TestAnswerOptions, TestGrade
from test_tasks.serializers import TestTasksSerializers, CreateTestTasksSerializers, TestQuestionAnswerSerializers, \
    CreateTestQuestionAnswerSerializers, TestAnswerOptionsSerializers, CreateTestAnswerOptionsSerializers, \
    TestGradeSerializers, CreateTestGradeSerializers


class TestTasksViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = TestTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class TestTasksViewAllCreate(generics.ListCreateAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = CreateTestTasksSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

#################################################################

class TestQuestionAnswerViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = TestQuestionAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


class TestQuestionAnswerViewAllCreate(generics.ListCreateAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = CreateTestQuestionAnswerSerializers
    permission_classes = (permissions.IsStudentAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()
#
# class AllTestQuestionAnswerView(generics.CreateAPIView):
#     queryset = TestQuestionAnswer.objects.all()
#     serializer_class = TestQuestionAnswerSerializers

#################################################################


class TestAnswerOptionsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = TestAnswerOptionsSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class TestAnswerOptionsViewAllCreate(generics.ListCreateAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = CreateTestAnswerOptionsSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

# class AllTestAnswerOptionsView(generics.CreateAPIView):
#     queryset = TestAnswerOptions.objects.all()
#     serializer_class = TestAnswerOptionsSerializers

#################################################################


class TestGradeViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = TestGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class TestGradeViewAllCreate(generics.ListCreateAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = CreateTestGradeSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

# class AllTestGradeView(generics.CreateAPIView):
#     queryset = TestGrade.objects.all()
#     serializer_class = TestGradeSerializers
