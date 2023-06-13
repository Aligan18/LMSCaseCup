from rest_framework import serializers

from categories.serializers import CategorySerializers
from students.serializers import AboutStudentsSerializers
from teachers.serializers import AboutTeachersSerializers
from .models import Course


class CreateCourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseSerializers(serializers.ModelSerializer):
    category = CategorySerializers(read_only=True)
    teacher = AboutTeachersSerializers(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class AboutCourseSerializers(serializers.ModelSerializer):
    category = CategorySerializers(read_only=True)

    class Meta:
        model = Course
        fields = ('id', 'title', 'category', 'image')


class OnlyStudentsCourseSerializers(serializers.ModelSerializer):
    student = AboutStudentsSerializers(read_only=True)

    class Meta:
        model = Course
        fields = ('student')
