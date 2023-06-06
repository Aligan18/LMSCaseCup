from django.shortcuts import render
from rest_framework import generics

from .models import Certificates
from .serializers import CertificatesSerializers, CreateCertificatesSerializers


class CertificatesViewCreate(generics.CreateAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CreateCertificatesSerializers

class CertificatesViewList(generics.ListAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializers
