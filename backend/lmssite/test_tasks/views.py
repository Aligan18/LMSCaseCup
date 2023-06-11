from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from mysite import permissions
from test_tasks.models import TestTasks, TestQuestionAnswer, TestAnswerOptions, TestGrade
from test_tasks.serializers import TestTasksSerializers, CreateTestTasksSerializers, TestQuestionAnswerSerializers, \
    CreateTestQuestionAnswerSerializers, TestAnswerOptionsSerializers, CreateTestAnswerOptionsSerializers, \
    TestGradeSerializers, CreateTestGradeSerializers, AboutTestTasksSerializers, AboutTestQuestionAnswerSerializers, \
    AboutTestAnswerOptionsSerializers, AboutTestGradeSerializers


# Admin ,  Teacher автор курса
class TestTasksViewCreate(generics.ListCreateAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = CreateTestTasksSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin ,  Teacher автор курса , Student проходит курс
class TestTasksViewList(generics.ListAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = AboutTestTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса , Student проходит курс
class TestTasksViewRetrieve(generics.RetrieveAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = CreateTestTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса
class TestTasksViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestTasks.objects.all()
    serializer_class = TestTasksSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


#################################################################

# Admin ,  Teacher автор курса
class TestQuestionAnswerViewCreate(generics.ListCreateAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = CreateTestQuestionAnswerSerializers
    permission_classes = (permissions.IsStudentAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()


# Admin ,  Teacher автор курса , Student проходит курс
class TestQuestionAnswerViewList(generics.ListAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = AboutTestQuestionAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


# Admin ,  Teacher автор курса , Student проходит курс
class TestQuestionAnswerViewRetrieve(generics.RetrieveAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = TestQuestionAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


# Admin ,  Teacher автор курса
class TestQuestionAnswerViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestQuestionAnswer.objects.all()
    serializer_class = CreateTestQuestionAnswerSerializers
    permission_classes = (permissions.IsOwnerStudentAdmin,)


# class AllTestQuestionAnswerView(generics.CreateAPIView):
#     queryset = TestQuestionAnswer.objects.all()
#     serializer_class = TestQuestionAnswerSerializers

#################################################################

# Admin ,  Teacher автор курса
class TestAnswerOptionsViewAllCreate(generics.ListCreateAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = CreateTestAnswerOptionsSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin ,  Teacher автор курса , Student проходит курс
class TestAnswerOptionsViewList(generics.ListAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = AboutTestAnswerOptionsSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса , Student проходит курс
class TestAnswerOptionsViewRetrieve(generics.RetrieveAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = TestAnswerOptionsSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса
class TestAnswerOptionsViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestAnswerOptions.objects.all()
    serializer_class = CreateTestAnswerOptionsSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# class AllTestAnswerOptionsView(generics.CreateAPIView):
#     queryset = TestAnswerOptions.objects.all()
#     serializer_class = TestAnswerOptionsSerializers

#################################################################

# Admin ,  Teacher автор курса , Student в конце теста
class TestGradeViewAllCreate(generics.ListCreateAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = CreateTestGradeSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin ,  Teacher автор курса
class TestGradeViewList(generics.ListAPIView): # Оценки всех студентов проходивших этот тест
    queryset = TestGrade.objects.all()
    serializer_class = AboutTestGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса , Student прошедший  тест
class TestGradeViewRetrieve(generics.RetrieveAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = TestGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin ,  Teacher автор курса
class TestGradeViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestGrade.objects.all()
    serializer_class = CreateTestGradeSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)

# class AllTestGradeView(generics.CreateAPIView):
#     queryset = TestGrade.objects.all()
#     serializer_class = TestGradeSerializers
