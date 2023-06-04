from django.db import models

class Admins(models.Model):

    def __str__(self):
        return self.title