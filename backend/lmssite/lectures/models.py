from django.db import models

class Lectures(models.Model):

    def __str__(self):
        return self.title