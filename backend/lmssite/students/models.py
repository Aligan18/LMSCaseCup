
from django.db import models

from custom_user.models import User


class Students(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    courses = models.ManyToManyField("course.Course")
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
