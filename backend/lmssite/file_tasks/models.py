from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.datetime_safe import date

from custom_user.models import User


class FileTasks(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    deadline = models.DateTimeField(null=True)

    def __str__(self):
        return self.title


class FileTasksAnswer(models.Model):
    student = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    data = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to='files/', null=True)
    file_task = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    list_modules = models.ForeignKey("list_modules.ListModules", on_delete=models.CASCADE)
    is_late = models.BooleanField(default=False)

    def __str__(self):
        return self.file


class FileTasksGrade(models.Model):
    file_task = models.OneToOneField("FileTasks", on_delete=models.CASCADE, null=True)
    student = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    data = models.DateTimeField(auto_now=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    comment = models.TextField(null=True)

    def __str__(self):
        return self.grade


@receiver(post_save, sender=FileTasksAnswer)
def create_date_complete(sender, instance, created, **kwargs):
    if created:
        deadline = instance.file_tasks.deadline
        current_date = date.today()
        if current_date > deadline:
            return

        FileTasksAnswer.objects.create(student=instance.student,
                                       is_late=True,
                                       file_tasks=instance.file_tasks
                                       )
