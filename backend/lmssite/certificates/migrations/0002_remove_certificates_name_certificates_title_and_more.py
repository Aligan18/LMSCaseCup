# Generated by Django 4.2.1 on 2023-06-05 05:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificates',
            name='name',
        ),
        migrations.AddField(
            model_name='certificates',
            name='title',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='certificates',
            name='data',
            field=models.DateTimeField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='certificates',
            name='email',
            field=models.EmailField(max_length=40),
        ),
    ]
