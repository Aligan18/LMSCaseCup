# Generated by Django 4.2.1 on 2023-07-22 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0008_alter_listmodules_module'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listmodules',
            name='module',
        ),
        migrations.AddField(
            model_name='modules',
            name='list_modules',
            field=models.ManyToManyField(blank=True, to='list_modules.listmodules'),
        ),
    ]
