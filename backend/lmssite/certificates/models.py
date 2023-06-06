from datetime import date

from django.db import models


class Certificates(models.Model):
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    student = models.ForeignKey("students.Students", on_delete=models.CASCADE)
    title = models.CharField(max_length=150, null=True)
    data = models.DateTimeField(default=date.today)
    file = models.FileField(upload_to="uploads/")
    email = models.EmailField(max_length=40)

    def __str__(self):
        return self.title
