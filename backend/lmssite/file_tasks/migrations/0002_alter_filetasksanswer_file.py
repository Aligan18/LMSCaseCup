# Generated by Django 4.2.1 on 2023-06-13 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('file_tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filetasksanswer',
            name='file',
            field=models.FileField(null=True, upload_to='files/'),
        ),
    ]
