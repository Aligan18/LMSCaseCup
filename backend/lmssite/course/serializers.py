from rest_framework import serializers

from categories.serializers import CategorySerializers
from teachers.serializers import AboutTeachersSerializers
from .models import Course


class CreateCourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class AboutCourseSerializers(serializers.ModelSerializer):
    category = CategorySerializers()

    class Meta:
        model = Course
        fields = ('id', 'title', 'category', 'image')




