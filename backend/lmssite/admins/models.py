from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from djoser.signals import user_registered

from students.models import Students
from teachers.models import Teachers


class Admins(models.Model):
    ADMIN_TYPES = [
        ("1", "Admin"),
        ("2", "Super Admin")
    ]
    admin_type = models.CharField(choices=ADMIN_TYPES, default="1", max_length=1)
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=40)
    patronymic = models.CharField(max_length=40)

    def __str__(self):
        return self.admin_type


@receiver(user_registered,  dispatch_uid="create_profile")
def create_profile(sender, user, request, **kwargs):
    """Создаём профиль пользователя при регистрации"""
    print(user.id)
    data = request.data
    if user.is_staff and user.is_superuser and data.get("type") == "super":
        Admins.objects.create(
            user=user.id,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
            admin_type=2,
        )

    elif user.is_staff == data.get("type") == "admin":
        Admins.objects.create(
            user=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
            admin_type=1,
        )
    elif data.get("type") == "teacher":
        Teachers.objects.create(
            user=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
        )
    elif data.get("type") == "student":
        Students.objects.create(
            user=user,
            name=data.get("name", ""),
            surname=data.get("surname", ""),
            patronymic=data.get("patronymic", ""),
        )

