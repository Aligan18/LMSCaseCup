from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from test_tasks.models import TestTasks, TestQuestionAnswer, TestAnswerOptions, TestGrade
from test_tasks.serializers import TestTasksSerializers, CreateTestTasksSerializers, TestQuestionAnswerSerializers, \
    CreateTestQuestionAnswerSerializers, TestAnswerOptionsSerializers, CreateTestAnswerOptionsSerializers, \
    TestGradeSerializers, CreateTestGradeSerializers


class TestTasksView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = TestTasksSerializers


class AllCreateTestTasksView(generics.ListCreateAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = CreateTestTasksSerializers


#################################################################

class TestQuestionAnswerView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = TestQuestionAnswerSerializers


class AllCreateTestQuestionAnswerView(generics.ListCreateAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = CreateTestQuestionAnswerSerializers

#
# class AllTestQuestionAnswerView(generics.CreateAPIView):
#     queryset = TestQuestionAnswer.objects.all()
#     serializer_class = TestQuestionAnswerSerializers

#################################################################


class TestAnswerOptionsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = TestAnswerOptionsSerializers


class AllCreateTestAnswerOptionsView(generics.ListCreateAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = CreateTestAnswerOptionsSerializers


# class AllTestAnswerOptionsView(generics.CreateAPIView):
#     queryset = TestAnswerOptions.objects.all()
#     serializer_class = TestAnswerOptionsSerializers

#################################################################


class TestGradeView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = TestGradeSerializers


class AllCreateTestGradeView(generics.ListCreateAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = CreateTestGradeSerializers


# class AllTestGradeView(generics.CreateAPIView):
#     queryset = TestGrade.objects.all()
#     serializer_class = TestGradeSerializers
