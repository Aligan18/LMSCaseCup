# Generated by Django 4.2.1 on 2023-06-13 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0005_alter_certificates_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificates',
            name='data',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
