from django.db import models

class Teachers(models.Model):

    def __str__(self):
        return self.title