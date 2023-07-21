import datetime

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from file_tasks.models import FileTasksAnswer, FileTasks
from test_tasks.models import TestGrade, TestTasks


class ListModules(models.Model):
    MODULE_TYPES = [
        ("1", "lecture"),
        ("2", "test task"),
        ("3", "file task")
    ]
    title = models.CharField(max_length=150, null=True)
    lecture_id = models.OneToOneField("lectures.Lectures", on_delete=models.CASCADE, null=True, blank=True)
    file_task_id = models.OneToOneField("file_tasks.FileTasks", on_delete=models.CASCADE, null=True, blank=True)
    test_task_id = models.OneToOneField("test_tasks.TestTasks", on_delete=models.CASCADE, null=True, blank=True)
    module_type = models.CharField(choices=MODULE_TYPES, default="1", max_length=1)
    number = models.IntegerField(default=1, blank=True)
    status = models.BooleanField(default=True, blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    deadline = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

class Modules(models.Model):
    title = models.CharField(max_length=150, null=True)
    order = models.IntegerField(default=1, blank=True)
    list_module = models.OneToOneField("list_modules.ListModules", on_delete=models.CASCADE, null=True, blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

@receiver(post_save, sender=FileTasksAnswer)
def update_date_complete(sender, instance, created, **kwargs):
    if created:
        deadline = ListModules.objects.filter(id=instance.list_modules.id)[0].deadline

        current_date = datetime.datetime.now()

        if not (current_date.timestamp() > deadline.timestamp()):
            FileTasksAnswer.objects.filter(id=instance.id).update(
                is_late=True
            )


@receiver(post_save, sender=TestGrade)
def update_date_complete(sender, instance, created, **kwargs):
    if created:
        deadline = ListModules.objects.filter(id=instance.list_modules.id)[0].deadline

        current_date = datetime.datetime.now()

        if not (current_date.timestamp() > deadline.timestamp()):
            TestGrade.objects.filter(id=instance.id).update(
                is_late=True
            )

