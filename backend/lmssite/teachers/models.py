from django.db import models


class Teachers(models.Model):
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    email = models.EmailField(max_length=60, null=True)
    about = models.TextField(blank=True, null=True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name
