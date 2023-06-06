from django.forms import model_to_dict
from rest_framework import generics
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Course
from .serializers import CourseSerializers


class CourseAPIView(APIView):
    def get(self, request):
        courseSer = Course.objects.all().values()
        return Response({"posts": CourseSerializers(courseSer, many=True).data})

    def post(self, request):
        serializer = CourseSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)

        post_new = Course.objects.create(
            title = request.data["title"],
            content = request.data["content"],
            cat_id = request.data["cat_id"]
        )
        return Response({"post": CourseSerializers(post_new).data})
