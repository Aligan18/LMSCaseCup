from rest_framework import serializers

from grades.models import Grades


class CreateGradesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Grades
        fields = '__all__'


class GradesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Grades
        fields = '__all__'


class AboutGradesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Grades
        fields = '__all__'


class ChangeGradesForTask(serializers.ModelSerializer):
    class Meta:
        model = Grades
        fields = 'grade'
