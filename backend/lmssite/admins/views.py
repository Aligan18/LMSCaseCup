from django.shortcuts import render
from rest_framework import generics

from .models import Admins
from .serializers import AdminsSerializers


class AdminsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers