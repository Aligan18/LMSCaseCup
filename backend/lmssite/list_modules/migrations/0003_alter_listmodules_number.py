# Generated by Django 4.2.1 on 2023-06-17 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0002_listmodules_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listmodules',
            name='number',
            field=models.IntegerField(default=1),
        ),
    ]
