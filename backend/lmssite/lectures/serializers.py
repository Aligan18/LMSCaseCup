from rest_framework import serializers

from lectures.models import Lectures


class LecturesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lectures
        fields = '__all__'


class CreateLecturesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lectures
        fields = '__all__'
