from django.db import models

class Lectures(models.Model):
    title = models.CharField(max_length=150, null=True)
    content = models.TextField(blank=True)


    def __str__(self):
        return self.title