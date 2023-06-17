from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
from rest_framework import generics
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from custom_user.permissions import IsTeacherHasAccess, IsStudentHasAccess, IsTeacherHasAccessCreate, \
    IsStudentHasAccessCreate
from list_modules.models import ListModules
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers, AboutListModulesSerializers

from list_modules.service import Filter


# Admin , Teacher с доступом к курсу
class ListModulesViewCreate(generics.CreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class ListModulesViewList(generics.ListAPIView):  # все модули курса
    queryset = ListModules.objects.all()
    serializer_class = AboutListModulesSerializers
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = Filter
    ordering_fields = ["number"]
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate | IsStudentHasAccessCreate]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class OnlyTasksListModulesViewList(generics.ListAPIView): #только задания
    queryset = ListModules.objects.all()
    serializer_class = AboutListModulesSerializers

    def get_queryset(self):
        queryset = ListModules.objects.all()
        queryset = queryset.filter(module_type__in=['2', '3'])
        return queryset

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = Filter
    ordering_fields = ["number"]
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate | IsStudentHasAccessCreate]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class ListModulesViewRetrieve(generics.RetrieveAPIView):
    queryset = ListModules.objects.all()
    serializer_class = ListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


# Admin , Teacher с доступом к курсу
class ListModulesViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess]

