from rest_framework import serializers

from lmssite.lectures.models import Lectures


class LecturesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lectures
        fields = '__all__'

