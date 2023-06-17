import datetime

from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.datetime_safe import date

from custom_user.models import User
from students.models import Students


class TestTasks(models.Model):
    deadline_minute = models.IntegerField(null=True)
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    questions = models.ManyToManyField("TestQuestionAnswer", blank=True)
    deadline = models.DateTimeField(null=True)


    def __str__(self):
        return self.title


class TestQuestionAnswer(models.Model):
    question = models.TextField()
    options = models.ManyToManyField("TestAnswerOptions")
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class TestAnswerOptions(models.Model):
    option = models.TextField(null=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    correct_answer = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class TestGrade(models.Model):
    test_task = models.OneToOneField("TestTasks", on_delete=models.CASCADE)
    student = student = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    data = models.DateTimeField(auto_now=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)
    list_modules = models.ForeignKey("list_modules.ListModules", on_delete=models.CASCADE)
    is_late = models.BooleanField(default=False)

    def __str__(self):
        return self.title


@receiver(post_save, sender=TestGrade)
def update_date_complete(sender, instance, created, **kwargs):
    if created:
        deadline = TestTasks.objects.filter(id=instance.test_task.id)[0].deadline

        current_date = datetime.datetime.now()

        if not (current_date.timestamp() > deadline.timestamp()):
            TestGrade.objects.filter(id=instance.id).update(
                is_late=True
            )

