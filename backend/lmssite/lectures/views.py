from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from lectures.models import Lectures

from lectures.serializers import LecturesSerializers, CreateLecturesSerializers, AboutLecturesSerializers
from mysite import permissions


# Admin , Teacher автор задания
class LecturesViewCreate(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin , Teacher автор задания, Student которые прооходят этот курс
class LecturesViewList(generics.ListAPIView):
    queryset = Lectures.objects.all()
    serializer_class = AboutLecturesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания, Student которые прооходят этот курс
class LecturesViewRetrieve(generics.RetrieveAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания
class LecturesViewUpdate(generics.UpdateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания
class LecturesViewDestroy(generics.DestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers
    permission_classes = (IsAuthenticated,)
