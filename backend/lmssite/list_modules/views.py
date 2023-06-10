from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from list_modules.models import ListModules
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers
from mysite import permissions


class ListModulesViewUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


class ListModulesViewRetrieve(generics.RetrieveAPIView):
    queryset = ListModules.objects.all()
    serializer_class = ListModulesSerializers
    permission_classes = (IsAuthenticated,)



class ListModulesViewAllCreate(generics.ListCreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()
