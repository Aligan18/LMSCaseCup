from django.db import models

class Admins(models.Model):
    admin_type = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)

    def __str__(self):
        return self.admin_type