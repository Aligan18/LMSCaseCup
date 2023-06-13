# Generated by Django 4.2.1 on 2023-06-12 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('course', '0002_initial'),
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='teacher',
            field=models.ManyToManyField(through='teachers.CourseTeacher', to='teachers.teachers'),
        ),
    ]