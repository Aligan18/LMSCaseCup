# Generated by Django 4.2.1 on 2023-06-07 17:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('teachers', '0003_alter_teachers_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teachers',
            name='email',
        ),
        migrations.AddField(
            model_name='teachers',
            name='user',
            field=models.OneToOneField(default=2, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
