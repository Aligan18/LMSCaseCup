# Generated by Django 4.2.1 on 2023-06-23 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0007_alter_certificates_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificates',
            name='file',
            field=models.FileField(blank=True, upload_to='files/'),
        ),
    ]