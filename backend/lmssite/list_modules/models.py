from django.db import models

class ListModules(models.Model):

    def __str__(self):
        return self.title