# Generated by Django 4.2.1 on 2023-06-13 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listmodules',
            name='deadline',
            field=models.DateTimeField(null=True),
        ),
    ]
