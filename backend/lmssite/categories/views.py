from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from categories.models import Category
from categories.serializers import CategorySerializers, CreateCategorySerializers, AboutCategorySerializers


# Admin
class CategoriesViewCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializers
    permission_classes = (IsAdminUser,)


# All
class CategoriesViewList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = AboutCategorySerializers
    permission_classes = (IsAdminUser,)


# All
class CategoriesViewRetrieve(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = (IsAdminUser,)


# Admin
class CategoriesViewUpdate(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializers
    permission_classes = (IsAdminUser,)


# Admin
class CategoriesViewDestroy(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CreateCategorySerializers
    permission_classes = (IsAdminUser,)
