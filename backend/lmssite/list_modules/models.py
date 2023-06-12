from django.db import models


class ListModules(models.Model):
    MODULE_TYPES = [
        ("1", "lecture"),
        ("2", "test task"),
        ("3", "file task")
    ]
    title = models.CharField(max_length=150, null=True)
    lecture_id = models.OneToOneField("lectures.Lectures", on_delete=models.CASCADE, null=True)
    file_task_id = models.OneToOneField("file_tasks.FileTasks", on_delete=models.CASCADE, null=True)
    test_task_id = models.OneToOneField("test_tasks.TestTasks", on_delete=models.CASCADE, null=True)
    module_type = models.CharField(choices=MODULE_TYPES, default="1", max_length=1)
    number = models.CharField(max_length=6, null=True)
    status = models.BooleanField(default=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
