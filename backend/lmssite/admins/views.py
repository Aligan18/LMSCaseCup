from rest_framework import generics

from custom_user.permissions import IsSuperAdmin
from .models import Admins

from .serializers import AdminsSerializers, CreateAdminsSerializers, AboutAdminsSerializers


# Super
class AdminsViewList(generics.ListAPIView):
    queryset = Admins.objects.all()
    serializer_class = AboutAdminsSerializers
    permission_classes = [IsSuperAdmin]


# Super
class AdminsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers
    permission_classes = [IsSuperAdmin]

