from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from course.models import Course
from custom_user.models import User


class Teachers(models.Model):
    USER_SEX = [
        ("1", "Male"),
        ("2", "Female"),
    ]
    sex = models.CharField(choices=USER_SEX, max_length=1, null=True)
    age = models.IntegerField(validators=[MinValueValidator(10), MaxValueValidator(100)], null=True)
    country = models.CharField(max_length=80, null=True)
    teacher = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True)
    courses = models.ManyToManyField("course.Course", through="CourseTeacher")
    resume = models.FileField(upload_to="files/",null=True)

    def __str__(self):
        return str(self.teacher)


class CourseTeacher(models.Model):
    teacher = models.ForeignKey(Teachers, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.teacher
