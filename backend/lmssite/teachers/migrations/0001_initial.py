# Generated by Django 4.2.1 on 2023-07-15 16:32

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('custom_user', '0001_initial'),
        ('categories', '0001_initial'),
        ('course', '0002_course_student'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='course.course')),
            ],
        ),
        migrations.CreateModel(
            name='Teachers',
            fields=[
                ('sex', models.CharField(blank=True, choices=[('1', 'Male'), ('2', 'Female')], max_length=1, null=True)),
                ('age', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(10), django.core.validators.MaxValueValidator(100)])),
                ('country', models.CharField(blank=True, max_length=80, null=True)),
                ('teacher', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('name', models.CharField(blank=True, max_length=40, null=True)),
                ('surname', models.CharField(blank=True, max_length=40, null=True)),
                ('patronymic', models.CharField(blank=True, max_length=40, null=True)),
                ('about', models.TextField(blank=True, null=True)),
                ('resume', models.FileField(blank=True, null=True, upload_to='files/')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='categories.category')),
                ('courses', models.ManyToManyField(through='teachers.CourseTeacher', to='course.course')),
            ],
        ),
        migrations.AddField(
            model_name='courseteacher',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='teachers.teachers'),
        ),
    ]
