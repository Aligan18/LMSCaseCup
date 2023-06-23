from rest_framework import serializers

from course.about_serializers import AboutCourseSerializers
from students.models import Students, CourseStudent


class CreateStudentsSerializers(serializers.ModelSerializer):
    student = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Students
        fields = '__all__'


class StudentsSerializers(serializers.ModelSerializer):
    courses = AboutCourseSerializers(many=True)

    class Meta:
        model = Students
        fields = '__all__'


class AboutStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('id', 'name', 'surname', 'patronymic')


class CourseStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = CourseStudent
        fields = '__all__'
