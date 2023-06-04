from rest_framework import serializers

from lmssite.admins.models import Admins


class AdminsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'


