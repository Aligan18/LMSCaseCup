from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from list_modules.models import ListModules
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers


class ListModulesView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ListModules.objects.all()
    serializer_class = ListModulesSerializers


class AllCreateListModulesView(generics.ListCreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers


