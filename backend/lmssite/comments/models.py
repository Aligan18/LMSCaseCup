from datetime import date

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

class Comments(models.Model):
    # course = models.ForeignKey("Course", on_delete=models.PROTECT, null=True)
    # student = models.ForeignKey("Students", on_delete=models.PROTECT, null=True)
    # data = models.DateField(default=date.today)
    # text = models.TextField(blank=False)
    # rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    #
    #

    def __str__(self):
        return self.text