# Generated by Django 4.2.1 on 2023-06-13 05:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teachers',
            old_name='user',
            new_name='teacher',
        ),
    ]