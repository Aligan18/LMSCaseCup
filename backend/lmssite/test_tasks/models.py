from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class TestTasks(models.Model):
    deadline_minute = models.IntegerField(null=True)
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class TestQuestionAnswer(models.Model):
    test_task = models.ForeignKey("TestTasks", on_delete=models.CASCADE)
    question = models.TextField()
    correct_answer = models.TextField()
    options = models.ManyToManyField("TestAnswerOptions")
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class TestAnswerOptions(models.Model):
    option: models.TextField()
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class TestGrade(models.Model):
    test_task = models.OneToOneField("TestTasks", on_delete=models.CASCADE)
    student = student = models.OneToOneField("students.Students", on_delete=models.CASCADE, null=True)
    grade = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    data = models.DateTimeField(auto_now=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
