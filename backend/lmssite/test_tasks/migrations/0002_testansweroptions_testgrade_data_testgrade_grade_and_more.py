# Generated by Django 4.2.1 on 2023-06-06 11:03

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_alter_students_email'),
        ('test_tasks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestAnswerOptions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AddField(
            model_name='testgrade',
            name='data',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='testgrade',
            name='grade',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AddField(
            model_name='testgrade',
            name='student',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='students.students'),
        ),
        migrations.AddField(
            model_name='testgrade',
            name='test_task',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testquestionanswer',
            name='correct_answer',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testquestionanswer',
            name='question',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testquestionanswer',
            name='test_task',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='test_tasks.testtasks'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testtasks',
            name='deadline_minute',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='testtasks',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='testtasks',
            name='title',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='testquestionanswer',
            name='options',
            field=models.ManyToManyField(to='test_tasks.testansweroptions'),
        ),
    ]
