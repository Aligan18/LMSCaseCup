from django.shortcuts import render
from rest_framework import generics

from course.models import Course
from course.serializers import CreateCourseSerializers, CourseSerializers, AboutCourseSerializers, CategorySerializers


class CourseViewCreate(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers

class CourseViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializers

class CourseViewList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers

class CategoryViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
