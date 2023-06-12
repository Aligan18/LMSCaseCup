from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser , AllowAny

from custom_user.permissions import IsStudent
from models import Certificates

from serializers import CertificatesSerializers, CreateCertificatesSerializers, AboutCertificatesSerializers


# Student and Admin
class CertificatesViewCreate(generics.CreateAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CreateCertificatesSerializers
    permission_classes = [IsAdminUser | IsStudent]


# All
class CertificatesViewList(generics.ListAPIView):
    queryset = Certificates.objects.all()
    serializer_class = AboutCertificatesSerializers
    permission_classes = [AllowAny]


# All
class CertificatesView(generics.RetrieveAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializers
    permission_classes = [AllowAny]


# # НЕ НУЖНО
# class CertificatesViewUpdate(generics.UpdateAPIView):
#     queryset = Certificates.objects.all()
#     serializer_class = CreateCertificatesSerializers
#     permission_classes = (IsAuthenticated,)


# Admin
class CertificatesViewDestroy(generics.DestroyAPIView):
    queryset = Certificates.objects.all()
    serializer_class = CreateCertificatesSerializers
    permission_classes = [IsAdminUser]
