from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny

import mysite
from course.models import Course
from course.serializers import CreateCourseSerializers, AboutCourseSerializers, CategorySerializers, \
    DeleteCourseSerializers, UpdateCourseSerializers
from django_filters.rest_framework import DjangoFilterBackend

<<<<<<< HEAD
from .permissions import IsTeacherAdmin, IsOwnerTeacherAdmin
=======
from mysite import permissions
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042
from .service import CategoryFilter


class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CreateCourseSerializers
<<<<<<< HEAD
    permission_classes = [IsTeacherAdmin]

    def perform_create(self, serializer):
        serializer.validated_data['teacher'] = self.request.user
        serializer.save()

=======
    permission_classes = (IsAdminUser,)

class CourseDeleteView(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = DeleteCourseSerializers
    permission_classes = (IsAdminUser,)
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042

class CourseUpdateView(generics.UpdateAPIView):
    queryset = Course.objects.all()
<<<<<<< HEAD
    serializer_class = CreateCourseSerializers
    permission_classes = [IsOwnerTeacherAdmin]

=======
    serializer_class = UpdateCourseSerializers
    permission_classes = (permissions.IsAdminTeacher1,)
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AboutCourseSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CategoryFilter
    permission_classes = (AllowAny,)

<<<<<<< HEAD

class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CategorySerializers
=======
>>>>>>> 62245e01de1c050429bab49faf9995b95f4bd042
