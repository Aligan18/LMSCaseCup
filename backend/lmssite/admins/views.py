from django.shortcuts import render
from rest_framework import generics

from .models import Admins
from .serializers import AdminsSerializers, CreateAdminsSerializers


class AdminsViewCreate(generics.CreateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers

class AdminsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers