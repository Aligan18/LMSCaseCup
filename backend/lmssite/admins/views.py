import requests
from django.shortcuts import render
from djoser.views import UserViewSet
from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Admins
from .permissions import IsSuperAdmin
from .serializers import AdminsSerializers, CreateAdminsSerializers


class AdminsCreateView(generics.CreateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = (IsSuperAdmin,)


class AdminsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers
    permission_classes = (IsSuperAdmin,)


# Djoser activations view
class ActivateUser(UserViewSet):
    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs.setdefault('context', self.get_serializer_context())

        # this line is the only change from the base implementation.
        kwargs['data'] = {"uid": self.kwargs['uid'], "token": self.kwargs['token']}

        return serializer_class(*args, **kwargs)

    def activation(self, request, uid, token, *args, **kwargs):
        super().activation(request, *args, **kwargs)
        return Response(status=status.HTTP_204_NO_CONTENT)
