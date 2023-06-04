
from lmssite.teachers.models import Teachers

from rest_framework import serializers


class TeachersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'
