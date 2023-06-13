from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from custom_user.permissions import IsTeacherHasAccess, IsStudentHasAccess, IsTeacherHasAccessCreate
from lectures.models import Lectures

from lectures.serializers import LecturesSerializers, CreateLecturesSerializers, AboutLecturesSerializers


# Admin , Teacher с доступом к курсу
class LecturesViewCreate(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class LecturesViewList(generics.ListAPIView):
    queryset = Lectures.objects.all()
    serializer_class = AboutLecturesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class LecturesViewRetrieve(generics.RetrieveAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


# Admin , Teacher с доступом к курсу
class LecturesViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]

# # Admin , Teacher с доступом к курсу
# class LecturesViewDestroy(generics.DestroyAPIView):
#     queryset = Lectures.objects.all()
#     serializer_class = CreateLecturesSerializers
#     permission_classes = [IsAdminUser | IsTeacherHasAccess]
