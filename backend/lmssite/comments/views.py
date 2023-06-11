from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from comments.models import Comments
from comments.serializers import CreateCommentsSerializers, CommentsSerializers, AboutCommentsSerializers


# Student у которого есть этот курс , Admin
class CommentsViewCreate(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers
    permission_classes = (IsAuthenticated,)


# All
class CommentsViewList(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = AboutCommentsSerializers
    permission_classes = (AllowAny,)


# НЕ НУЖНО
class CommentsViewRetrieve(generics.RetrieveAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializers
    permission_classes = (AllowAny,)


# Student автор коменнтария , Admin
class CommentsViewUpdate(generics.UpdateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers
    permission_classes = (AllowAny,)


# Student автор коменнтария , Admin
class CommentsViewDestroy(generics.DestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers
    permission_classes = (AllowAny,)
