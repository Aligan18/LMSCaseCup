# Generated by Django 4.2.1 on 2023-06-18 08:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('test_tasks', '0009_alter_testgrade_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testtasks',
            name='deadline',
        ),
    ]