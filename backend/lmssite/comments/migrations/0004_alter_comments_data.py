# Generated by Django 4.2.1 on 2023-06-15 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='data',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
