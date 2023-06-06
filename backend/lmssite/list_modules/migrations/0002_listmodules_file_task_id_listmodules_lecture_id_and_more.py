# Generated by Django 4.2.1 on 2023-06-06 04:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('test_tasks', '0001_initial'),
        ('file_tasks', '0002_filetasks_course_filetasks_description_and_more'),
        ('lectures', '0002_lectures_content_lectures_title'),
        ('list_modules', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listmodules',
            name='file_task_id',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='file_tasks.filetasks'),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='lecture_id',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='lectures.lectures'),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='module_type',
            field=models.CharField(choices=[('1', 'lecture'), ('2', 'test task'), ('3', 'file task')], default='1', max_length=1),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='number',
            field=models.CharField(max_length=6, null=True),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='status',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='test_task_id',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks'),
        ),
        migrations.AddField(
            model_name='listmodules',
            name='title',
            field=models.CharField(max_length=150, null=True),
        ),
    ]