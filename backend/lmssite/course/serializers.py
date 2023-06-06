from rest_framework import serializers

from teachers.serializers import AboutTeachersSerializers
from .models import Course, Category


class CreateCourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AboutCourseSerializers(serializers.ModelSerializer):
    category = CategorySerializers()

    class Meta:
        model = Course
        fields = ('id', 'title', 'category', 'image')


class CourseSerializers(serializers.ModelSerializer):
    teacher = AboutTeachersSerializers()
    category = CategorySerializers()

    class Meta:
        model = Course
        fields = '__all__'
