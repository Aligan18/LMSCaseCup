from django.db import models


class Lectures(models.Model):
    title = models.CharField(max_length=150, null=True)
    content = models.TextField(blank=True)
    course = models.ForeignKey("course.Course", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
