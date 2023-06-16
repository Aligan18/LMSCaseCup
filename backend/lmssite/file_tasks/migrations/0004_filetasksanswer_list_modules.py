# Generated by Django 4.2.1 on 2023-06-16 04:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0002_listmodules_deadline'),
        ('file_tasks', '0003_alter_filetasksanswer_student'),
    ]

    operations = [
        migrations.AddField(
            model_name='filetasksanswer',
            name='list_modules',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='list_modules.listmodules'),
            preserve_default=False,
        ),
    ]
