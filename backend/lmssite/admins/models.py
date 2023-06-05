from django.db import models

class Admins(models.Model):
    ADMIN_TYPES = [
        ("1", "Admin"),
        ("2", "Super Admin")
    ]
    admin_type = models.CharField(choices=ADMIN_TYPES, default="1", max_length=1)
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=40)
    patronymic = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)

    def __str__(self):
        return self.admin_type