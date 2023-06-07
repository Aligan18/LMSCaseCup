from django.shortcuts import render
from rest_framework import generics

from course.models import Course
from course.serializers import CreateCourseSerializers, CourseSerializers, AboutCourseSerializers, CategorySerializers
from django_filters.rest_framework import DjangoFilterBackend
from .service import CategoryFilter

class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers

class CourseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializers

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter

class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
