from rest_framework import serializers
from .models import Course


# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Course
#         fields = ('title', 'cat_id')

class CourseSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    content = serializers.CharField()
    time_create = serializers.DateTimeField(read_only=True)
    time_update = serializers.DateTimeField(read_only=True)
    is_published = serializers.BooleanField(default=True)
    cat_id = serializers.IntegerField()
