from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

from comments.models import Comments
from comments.serializers import CreateCommentsSerializers, CommentsSerializers, AboutCommentsSerializers
from custom_user.permissions import IsStudent, IsStudentOwner


# Student , Admin
class CommentsViewCreate(generics.CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers
    permission_classes = [IsAdminUser | IsStudent]

    def perform_create(self, serializer):
        serializer.validated_data['student'] = self.request.user
        serializer.save()


# All
class CommentsViewList(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = AboutCommentsSerializers
    permission_classes = [AllowAny]


# Student автор коменнтария , Admin
class CommentsViewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CreateCommentsSerializers
    permission_classes = [IsAdminUser | IsStudentOwner]


# # Student автор коменнтария , Admin
# class CommentsViewDestroy(generics.DestroyAPIView):
#     queryset = Comments.objects.all()
#     serializer_class = CreateCommentsSerializers
#     permission_classes = [IsAdminUser | IsStudentOwner]
