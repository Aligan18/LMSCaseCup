from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from list_modules.models import ListModules
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers, AboutListModulesSerializers
from mysite import permissions


# Admin , Teacher автор задания
class ListModulesViewCreate(generics.CreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = (permissions.IsTeacherAdmin,)

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()


# Admin , Teacher автор задания, Student которые прооходят этот курс
class ListModulesViewList(generics.ListAPIView):
    queryset = ListModules.objects.all()
    serializer_class = AboutListModulesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания, Student которые прооходят этот курс
class ListModulesViewRetrieve(generics.RetrieveAPIView):
    queryset = ListModules.objects.all()
    serializer_class = ListModulesSerializers
    permission_classes = (IsAuthenticated,)


# Admin , Teacher автор задания
class ListModulesViewUpdate(generics.UpdateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)


# Admin , Teacher автор задания
class ListModulesViewDestroy(generics.DestroyAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = (permissions.IsOwnerTeacherAdmin,)
