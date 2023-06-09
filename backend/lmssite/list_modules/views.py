from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from list_modules.models import ListModules
from list_modules.permissions import IsOwnerTeacherOrIsAdmin
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers


class ListModulesViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = [IsOwnerTeacherOrIsAdmin]


class ListModulesViewRetrieve(generics.RetrieveAPIView):
    queryset = ListModules.objects.all()
    serializer_class = ListModulesSerializers


class ListModulesViewAllCreate(generics.ListCreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
