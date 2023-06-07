from django.contrib.auth.models import User
from django.db import models


class Teachers(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name
