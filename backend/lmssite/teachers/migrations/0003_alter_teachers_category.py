# Generated by Django 4.2.1 on 2023-06-06 16:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('teachers', '0002_teachers_about_teachers_category_teachers_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teachers',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='categories.category'),
        ),
    ]
