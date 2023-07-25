# Generated by Django 4.2.1 on 2023-07-22 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0005_alter_modules_list_module'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listmodules',
            name='course',
        ),
        migrations.RemoveField(
            model_name='listmodules',
            name='number',
        ),
        migrations.RemoveField(
            model_name='listmodules',
            name='status',
        ),
        migrations.RemoveField(
            model_name='listmodules',
            name='title',
        ),
        migrations.AddField(
            model_name='listmodules',
            name='order',
            field=models.IntegerField(blank=True, default=1),
            preserve_default=False,
        ),
    ]