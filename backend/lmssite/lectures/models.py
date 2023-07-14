from django.db import models


class Lectures(models.Model):
    title = models.CharField(max_length=150, null=True)
    description = models.TextField(blank=True)
    number = models.IntegerField()
    video = models.CharField(max_length=150, null=True)
    content = models.ManyToManyField('LessonContent')
    additions = models.ManyToManyField('Additions')
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Additions(models.Model):
    file = models.FileField()
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class LessonContent(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=10)
    content = models.TextField()
    order = models.IntegerField()

    def __str__(self):
        return self.title
