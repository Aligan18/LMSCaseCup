from datetime import date

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

class Comments(models.Model):
    course = models.ForeignKey("course.Course", on_delete=models.PROTECT, null=True)
    student = models.ForeignKey("students.Students", on_delete=models.PROTECT, null=True)
    data = models.DateTimeField(default=date.today)
    text = models.TextField(blank=False, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)



    def __str__(self):
        return self.text