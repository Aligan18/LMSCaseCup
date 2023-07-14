from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from course.models import Course
from custom_user.models import User


class Students(models.Model):
    USER_SEX = [
        ("1", "Male"),
        ("2", "Female"),
    ]
    sex = models.CharField(choices=USER_SEX, max_length=1, null=True)
    age = models.IntegerField(validators=[MinValueValidator(10), MaxValueValidator(100)], null=True)
    country = models.CharField(max_length=80, null=True)
    student = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_student')
    courses = models.ManyToManyField("course.Course", through="CourseStudent")
    name = models.CharField(max_length=40, null=True)
    surname = models.CharField(max_length=40, null=True)
    patronymic = models.CharField(max_length=40, null=True)
    about = models.TextField(blank=True, null=True)
 
    university = models.CharField(max_length=80, null=True)
    favorite = models.ManyToManyField(Course, related_name='student_favorite', blank=True)

    def __str__(self):
        return self.name


class CourseStudent(models.Model):
    student = models.ForeignKey(Students, on_delete=models.CASCADE)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE)
    group = models.CharField(max_length=10, blank=True, null=True)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.student
