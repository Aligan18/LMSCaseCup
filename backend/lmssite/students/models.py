from django.db import models

class Students(models.Model):
    courses = models.ManyToManyField("course.Course")
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    email = models.EmailField(max_length=60, null=True)
    about = models.TextField(blank=True, null=True)


    def __str__(self):
        return self.title