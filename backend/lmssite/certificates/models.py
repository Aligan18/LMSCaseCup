from django.db import models

class Certificates(models.Model):

    def __str__(self):
        return self.title