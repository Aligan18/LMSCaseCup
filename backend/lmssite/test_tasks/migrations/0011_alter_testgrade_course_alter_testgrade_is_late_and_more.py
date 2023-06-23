# Generated by Django 4.2.1 on 2023-06-23 18:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0007_course_syllabus'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('list_modules', '0004_alter_listmodules_deadline_and_more'),
        ('test_tasks', '0010_remove_testtasks_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testgrade',
            name='course',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='course.course'),
        ),
        migrations.AlterField(
            model_name='testgrade',
            name='is_late',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='testgrade',
            name='list_modules',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='list_modules.listmodules'),
        ),
        migrations.AlterField(
            model_name='testgrade',
            name='student',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='testgrade',
            name='test_task',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks'),
        ),
        migrations.AlterField(
            model_name='testquestionanswer',
            name='options',
            field=models.ManyToManyField(blank=True, to='test_tasks.testansweroptions'),
        ),
    ]
