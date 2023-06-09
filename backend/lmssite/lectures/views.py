from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from course.permissions import IsTeacherAdmin
from lectures.models import Lectures

from lectures.serializers import LecturesSerializers, CreateLecturesSerializers
from list_modules.permissions import IsOwnerTeacherOrIsAdmin

from lectures.serializers import LecturesSerializers, CreateLecturesSerializers, WatchLecturesSerializers
from mysite import permissions



class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers

    permission_classes = [IsTeacherAdmin]

    permission_classes = (permissions.IsAdminTeacher,)




class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers

    permission_classes = [IsAdminUser]

    permission_classes = (permissions.IsAdminTeacher,)


class LecturesWatchView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = WatchLecturesSerializers
    permission_classes = (permissions.IsAdminTeacherStudent,)

