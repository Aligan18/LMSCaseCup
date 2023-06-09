from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import Certificates

from .serializers import CertificatesSerializers, CreateCertificatesSerializers


class CertificatesCreateView(generics.CreateAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CreateCertificatesSerializers


class CertificatesListView(generics.ListAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializers
