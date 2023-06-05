# Generated by Django 4.2.1 on 2023-06-05 05:09

import datetime
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
        ('course', '0001_initial'),
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='course.course'),
        ),
        migrations.AddField(
            model_name='comments',
            name='data',
            field=models.DateTimeField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='comments',
            name='rating',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
        migrations.AddField(
            model_name='comments',
            name='student',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='students.students'),
        ),
        migrations.AddField(
            model_name='comments',
            name='text',
            field=models.TextField(null=True),
        ),
    ]
