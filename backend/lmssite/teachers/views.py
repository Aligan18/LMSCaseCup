from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from mysite.permissions import IsTeacherAdmin
from teachers.models import Teachers
from teachers.serializers import CreateTeachersSerializers, TeachersSerializers, AboutTeachersSerializers


class TeachersViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teachers.objects.all()
    serializer_class = TeachersSerializers
    permission_classes = (IsTeacherAdmin,)


class TeachersViewCreate(generics.CreateAPIView):
    queryset = Teachers.objects.all()
    serializer_class = CreateTeachersSerializers
    permission_classes = (IsAdminUser,)


class TeachersViewAll(generics.ListAPIView):
    queryset = Teachers.objects.all()
    serializer_class = AboutTeachersSerializers
    permission_classes = (IsAuthenticated,)
