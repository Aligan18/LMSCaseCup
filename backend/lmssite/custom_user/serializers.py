from django.contrib.auth.models import User
from djoser.serializers import UserSerializer, UserCreateSerializer


class CreateCustomUserSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = ('is_staff',)
