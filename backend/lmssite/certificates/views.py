from django.shortcuts import render
from rest_framework import generics

from .models import Certificates
from .serializers import CertificatesSerializers


class CertificatesView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializers
