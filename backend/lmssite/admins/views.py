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
class AdminsViewRetrieve(generics.RetrieveAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers
    permission_classes = [IsSuperAdmin]


# Super
class AdminsViewUpdate(generics.UpdateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = [IsSuperAdmin]


# Super
class AdminsViewDestroy(generics.DestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = [IsSuperAdmin]
