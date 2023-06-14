from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from custom_user.permissions import IsTeacherHasAccess, IsStudentHasAccess, IsTeacherHasAccessCreate
from list_modules.models import ListModules
from list_modules.serializers import ListModulesSerializers, CreateListModulesSerializers, AboutListModulesSerializers


# Admin , Teacher с доступом к курсу
class ListModulesViewCreate(generics.CreateAPIView):
    queryset = ListModules.objects.all()
    serializer_class = CreateListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccessCreate]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class ListModulesViewList(generics.ListAPIView):  # все модули курса #  сделать сортировка  по number  и фильтрация по курсу
    queryset = ListModules.objects.all()
    serializer_class = AboutListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


# Admin , Teacher с доступом к курсу, Student которые прооходят этот курс
class OnlyTasksListModulesViewList(generics.ListAPIView): #только задания   # сделать сортировка  по number  и фильтрация по курсу и  module_type только задания
    queryset = ListModules.objects.all()
    serializer_class = AboutListModulesSerializers
    permission_classes = [IsAdminUser | IsTeacherHasAccess | IsStudentHasAccess]


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

# Admin , Teacher с доступом к курсу
# class ListModulesViewDestroy(generics.DestroyAPIView):
#     queryset = ListModules.objects.all()
#     serializer_class = CreateListModulesSerializers
#     permission_classes = [IsAdminUser | IsTeacherHasAccess]
