from rest_framework import generics

from .models import Admins
from .permissions import IsSuperAdmin
from .serializers import AdminsSerializers, CreateAdminsSerializers, AboutAdminsSerializers


# НЕ Используется
class AdminsViewCreate(generics.CreateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = (IsSuperAdmin,)


# Admin
class AdminsViewList(generics.ListAPIView):
    queryset = Admins.objects.all()
    serializer_class = AboutAdminsSerializers
    permission_classes = (IsSuperAdmin,)


# Admin
class AdminsViewRetrieve(generics.RetrieveAPIView):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializers
    permission_classes = (IsSuperAdmin,)


# Super
class AdminsViewUpdate(generics.UpdateAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = (IsSuperAdmin,)


# Super
class AdminsViewDestroy(generics.DestroyAPIView):
    queryset = Admins.objects.all()
    serializer_class = CreateAdminsSerializers
    permission_classes = (IsSuperAdmin,)
