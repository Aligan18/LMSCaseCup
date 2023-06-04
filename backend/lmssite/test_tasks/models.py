from django.db import models

class TestTasks(models.Model):

    def __str__(self):
        return self.title


class TestQuestionAnswer(models.Model):

    def __str__(self):
        return self.title

class TestGrade(models.Model):

    def __str__(self):
        return self.title