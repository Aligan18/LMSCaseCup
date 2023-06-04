from django.db import models

class FileTasks(models.Model):

    def __str__(self):
        return self.title


class FileTasksAnswer(models.Model):

    def __str__(self):
        return self.title

class FileTasksGrade(models.Model):

    def __str__(self):
        return self.title