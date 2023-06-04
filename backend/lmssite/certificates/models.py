from datetime import date
from django.db import models

class Certificates(models.Model):
    course = models.ForeignKey("Course", on_delete=models.PROTECT, null=True)
    student = models.ManyToManyField("Students")
    name = models.CharField(max_length=255)
    data = models.DateField(default=date.today)
    file = models.FileField(upload_to="uploads/")


    def __str__(self):
        return self.name