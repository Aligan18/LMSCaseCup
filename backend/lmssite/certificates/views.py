from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import Certificates
from .permissions import IsTeacher
from .serializers import CertificatesSerializers, CreateCertificatesSerializers


class CertificatesCreateView(generics.CreateAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CreateCertificatesSerializers
    permission_classes = (IsTeacher, )

class CertificatesListView(generics.ListAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializers
    permission_classes = (IsAdminUser, IsTeacher,)