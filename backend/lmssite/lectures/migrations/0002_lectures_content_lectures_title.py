# Generated by Django 4.2.1 on 2023-06-06 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lectures', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lectures',
            name='content',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='lectures',
            name='title',
            field=models.CharField(max_length=150, null=True),
        ),
    ]
