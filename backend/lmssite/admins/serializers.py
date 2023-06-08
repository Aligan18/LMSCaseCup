from rest_framework import serializers

from .models import Admins


class CreateAdminsSerializers(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Admins
        exclude = ['admin_type']


class AdminsSerializers(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Admins
        fields = ['admin_type']

