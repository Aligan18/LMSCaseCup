from django.db import models

from custom_user.models import User


class Course(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True ,blank= True)
    time_update = models.DateTimeField(auto_now=True,blank= True)
    is_published = models.BooleanField(default=True ,blank= True)
    category = models.ForeignKey("categories.Category", on_delete=models.PROTECT, null=True ,blank= True)
    rating = models.IntegerField(default=0)

    image = models.ImageField(upload_to='uploads/', null=True ,blank= True)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)

    image = models.ImageField(upload_to='uploads/', null=True)
    teacher = models.ForeignKey("teachers.Teachers", on_delete=models.CASCADE, null=True)
    list_module = models.OneToOneField("list_modules.ListModules", on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.title


