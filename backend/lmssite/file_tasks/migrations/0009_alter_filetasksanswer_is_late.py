# Generated by Django 4.2.1 on 2023-06-17 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('file_tasks', '0008_filetasksanswer_is_late'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filetasksanswer',
            name='is_late',
            field=models.BooleanField(),
        ),
    ]
