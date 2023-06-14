from rest_framework import serializers

from course.about_serializers import AboutCourseSerializers
from students.models import Students


class CreateStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'


class StudentsSerializers(serializers.ModelSerializer):
    courses = AboutCourseSerializers()

    class Meta:
        model = Students
        fields = '__all__'


class AboutStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('id', 'name', 'surname', 'patronymic')
