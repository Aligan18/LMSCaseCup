from django.db import models

class Students(models.Model):

    def __str__(self):
        return self.title