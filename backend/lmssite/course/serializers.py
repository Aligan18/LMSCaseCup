from rest_framework import serializers
from .models import Course, Category
from lmssite.teachers.serializers import AboutTeachersSerializers


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
        fields = ('id', 'title', 'category_id', 'image',)


class CourseSerializers(serializers.ModelSerializer):
    teacher = AboutTeachersSerializers()
    category = CategorySerializers()

    class Meta:
        model = Course
        fields = '__all__'
