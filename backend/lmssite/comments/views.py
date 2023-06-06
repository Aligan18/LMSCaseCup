from django.shortcuts import render
from rest_framework import generics

from comments.models import Comments
from comments.serializers import CreateCommentsSerializers, CommentsSerializers


class CommentsViewCreate(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers

class CommentsViewList(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializers
