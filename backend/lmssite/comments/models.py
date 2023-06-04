from django.db import models

class Comments(models.Model):

    def __str__(self):
        return self.title