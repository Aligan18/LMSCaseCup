from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True)
    rating = models.IntegerField(default=0)
    image = models.ImageField(upload_to='uploads/', null=True)
    teacher = models.ForeignKey("teachers.Teachers", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


