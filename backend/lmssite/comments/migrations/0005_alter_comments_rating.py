# Generated by Django 4.2.1 on 2023-06-23 18:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0004_alter_comments_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='rating',
            field=models.IntegerField(blank=True, default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]
