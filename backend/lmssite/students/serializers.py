from rest_framework import serializers

from course.about_serializers import AboutCourseSerializers
from custom_user.serializers import CreateCustomUserSerializer
from students.models import Students, CourseStudent


class CreateStudentsSerializers(serializers.ModelSerializer):
    student = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Students
        fields = '__all__'


class StudentsSerializers(serializers.ModelSerializer):


    class Meta:
        model = Students
        fields = '__all__'


class AboutStudentsSerializers(serializers.ModelSerializer):
    student = CreateCustomUserSerializer()
    class Meta:
        model = Students
        fields = ('name', 'surname', 'patronymic', 'student')


class CourseStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = CourseStudent
        fields = '__all__'
