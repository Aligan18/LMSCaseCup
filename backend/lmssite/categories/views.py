from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from categories.models import Category
from categories.serializers import CategorySerializers


class CategoriesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = (IsAdminUser,)