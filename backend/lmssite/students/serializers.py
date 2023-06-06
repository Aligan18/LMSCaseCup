from rest_framework import serializers

from lmssite.course.serializers import AboutCourseSerializers
from lmssite.students.models import Students


class CreateStudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'


class StudentsSerializers(serializers.ModelSerializer):
    courses = AboutCourseSerializers()

    class Meta:
        model = Students
        fields = '__all__'


class AboutStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('id', 'name', 'surname', 'patronymic')
