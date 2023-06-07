from django.shortcuts import render
from rest_framework import generics

from .models import Admins
from .serializers import AdminsSerializers, CreateAdminsSerializers


class AdminsCreateView(generics.CreateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers

class AdminsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers