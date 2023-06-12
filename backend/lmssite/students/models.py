from django.db import models

from course.models import Course
from custom_user.models import User


class Students(models.Model):
    student = models.OneToOneField(User, on_delete=models.CASCADE)
    courses = models.ManyToManyField("course.Course", through="CourseStudent")
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class CourseStudent(models.Model):
    student = models.ForeignKey(Students, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.student
