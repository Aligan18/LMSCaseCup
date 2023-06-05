from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

class FileTasks(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True)
    grade = models.ForeignKey("FileTasksGrade", on_delete=models.CASCADE, null=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class FileTasksAnswer(models.Model):
    student = models.OneToOneField("students.Students", on_delete=models.CASCADE, null=True)
    data = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to ='uploads/', null=True)
    file_id = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.file

class FileTasksGrade(models.Model):
    file_task_id = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)
    student = models.OneToOneField("students.Students", on_delete=models.CASCADE, null=True)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    data = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.grade