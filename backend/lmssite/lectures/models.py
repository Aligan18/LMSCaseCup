from django.db import models


class Lectures(models.Model):
    title = models.CharField(max_length=150, null=True)
    description = models.TextField(blank=True , null=True)
    number = models.IntegerField(blank=True , null=True)
    video = models.CharField(max_length=150, null=True)
    content = models.ManyToManyField('LessonContent', blank=True , null=True)
    additions = models.ManyToManyField('Additions', blank=True , null=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Additions(models.Model):
    file = models.FileField(blank=True)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class LessonContent(models.Model):
    title = models.CharField(max_length=100, blank=True)
    type = models.CharField(max_length=10,blank=True)
    content = models.TextField(blank=True)
    order = models.IntegerField(blank=True)

    def __str__(self):
        return self.title
