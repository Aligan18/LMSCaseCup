from rest_framework import serializers

from .models import Admins


class CreateAdminsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'


class AdminsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'

