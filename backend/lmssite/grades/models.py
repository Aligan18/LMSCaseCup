from django.db import models

# Create your models here.
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from custom_user.models import User
from file_tasks.models import FileTasksAnswer

from test_tasks.models import TestAnswerOptions, TestGrade


class Grades(models.Model):
    MODULE_TYPES = [
        ("1", "lecture"),
        ("2", "test task"),
        ("3", "file task")
    ]
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    attendance = models.BooleanField(default=False)
    grade = models.IntegerField(default=0, null=True)
    module_type = models.CharField(choices=MODULE_TYPES, default="1", max_length=1)
    list_modules = models.ForeignKey("list_modules.ListModules", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


@receiver(post_save, sender=TestGrade)
def create_grades(sender, instance, created, **kwargs):
    if created:
        Grades.objects.create(student=instance.student,
                              attendance=True,
                              grade=instance.grade,
                              list_modules=instance.list_modules,
                              module_type="2",
                              course=instance.course
                              )


@receiver(post_save, sender=FileTasksAnswer)
def save_user_profile(sender, instance, created, **kwargs):
    if created:
        Grades.objects.create(student=instance.student,
                              attendance=True,
                              grade=None,
                              list_modules=instance.list_modules,
                              module_type="3",
                              course=instance.course
                              )
