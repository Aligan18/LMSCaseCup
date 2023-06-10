from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from custom_user.models import User


class FileTasks(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class FileTasksAnswer(models.Model):
    student = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    data = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to='uploads/', null=True)
    file_task = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.file


class FileTasksGrade(models.Model):
    file_task = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)
    student = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    data = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.grade
