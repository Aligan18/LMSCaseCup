# Generated by Django 4.2.1 on 2023-06-08 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0003_alter_certificates_course_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificates',
            name='email',
        ),
    ]
