from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from course.permissions import IsTeacherAdmin
from lectures.models import Lectures
<<<<<<< HEAD
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers
from list_modules.permissions import IsOwnerTeacherOrIsAdmin
=======
from lectures.serializers import LecturesSerializers, CreateLecturesSerializers, WatchLecturesSerializers
from mysite import permissions
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042


class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
<<<<<<< HEAD
    permission_classes = [IsTeacherAdmin]
=======
    permission_classes = (permissions.IsAdminTeacher,)

>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042


class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
<<<<<<< HEAD
    permission_classes = [IsAdminUser]
=======
    permission_classes = (permissions.IsAdminTeacher,)


class LecturesWatchView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = WatchLecturesSerializers
    permission_classes = (permissions.IsAdminTeacherStudent,)
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042
