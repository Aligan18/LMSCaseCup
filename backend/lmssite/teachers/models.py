from django.db import models

from course.models import Course
from custom_user.models import User


class Teachers(models.Model):
    teacher = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True)
    courses = models.ManyToManyField("course.Course", through="CourseTeacher")

    def __str__(self):
        return self.name


class CourseTeacher(models.Model):
    teacher = models.ForeignKey(Teachers, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.teacher
