from django.db import models

from django.dispatch import receiver
from djoser.signals import user_registered

from custom_user.models import User
from students.models import Students
from teachers.models import Teachers


class Admins(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=40, blank=True)
    surname = models.CharField(max_length=40, blank=True)
    patronymic = models.CharField(max_length=40, blank=True)

    def __str__(self):
        return self.admin_type


@receiver(user_registered, dispatch_uid="create_profile")
def create_profile(sender, user, request, **kwargs):
    """Создаём профиль пользователя при регистрации"""

    data = request.data

    if data.get("type") == "2" and request.user.is_superuser:
        Admins.objects.create(
            user=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
            admin_type=1,
        )
    elif data.get("type") == "3" and request.user.is_staff:
        Teachers.objects.create(
            teacher=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
        )
    elif data.get("type") == "4":
        Students.objects.create(
            student=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
        )
    else:
        User.objects.filter(pk=user.id).delete()
