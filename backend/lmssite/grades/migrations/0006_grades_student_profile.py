# Generated by Django 4.2.1 on 2023-08-06 07:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0006_alter_students_sex'),
        ('grades', '0005_grades_module_index'),
    ]

    operations = [
        migrations.AddField(
            model_name='grades',
            name='student_profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='students.students'),
        ),
    ]