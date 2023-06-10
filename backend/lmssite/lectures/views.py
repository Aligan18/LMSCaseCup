from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from lectures.models import Lectures


from lectures.serializers import LecturesSerializers, CreateLecturesSerializers, WatchLecturesSerializers
from mysite import permissions



class LecturesCreateView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = CreateLecturesSerializers

    permission_classes = (permissions.IsTeacherAdmin,)
    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

class LecturesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lectures.objects.all()
    serializer_class = LecturesSerializers

    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class LecturesWatchView(generics.CreateAPIView):
    queryset = Lectures.objects.all()
    serializer_class = WatchLecturesSerializers
    permission_classes = (IsAuthenticated,)

