# Generated by Django 4.2.1 on 2023-06-10 16:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0002_listmodules_file_task_id_listmodules_lecture_id_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course', '0006_merge_20230610_2204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='list_module',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='list_modules.listmodules'),
        ),
        migrations.AlterField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
