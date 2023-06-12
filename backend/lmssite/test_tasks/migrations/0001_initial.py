# Generated by Django 4.2.1 on 2023-06-12 11:52

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestAnswerOptions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='TestTasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deadline_minute', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestQuestionAnswer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField()),
                ('correct_answer', models.TextField()),
                ('options', models.ManyToManyField(to='test_tasks.testansweroptions')),
                ('test_task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks')),
            ],
        ),
        migrations.CreateModel(
            name='TestGrade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('data', models.DateTimeField(auto_now=True)),
                ('student', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='students.students')),
                ('test_task', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks')),
            ],
        ),
    ]
