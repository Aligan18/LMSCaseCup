# Generated by Django 4.2.1 on 2023-06-07 17:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('students', '0003_alter_students_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='students',
            name='email',
        ),
        migrations.AddField(
            model_name='students',
            name='user',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
