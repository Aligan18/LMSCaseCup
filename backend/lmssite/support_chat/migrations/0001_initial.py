# Generated by Django 4.2.1 on 2023-07-15 13:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UnauthorizedTickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(blank=True, choices=[('1', 'Забыл пароль'), ('2', 'Не могу войти '), ('3', 'Не работает ')], default='3', max_length=1)),
                ('title', models.CharField(max_length=150, null=True)),
                ('description', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('date', models.DateTimeField(auto_now=True, null=True)),
                ('file', models.FileField(blank=True, upload_to='files/')),
            ],
        ),
        migrations.CreateModel(
            name='TeacherTickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(choices=[('1', 'Забыл пароль'), ('2', 'Смена курса '), ('3', 'Не работает ')], default='3', max_length=1)),
                ('title', models.CharField(max_length=150, null=True)),
                ('description', models.TextField(blank=True)),
                ('answer', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
                ('date', models.DateTimeField(auto_now=True, null=True)),
                ('file', models.FileField(blank=True, upload_to='files/')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StudentTickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(choices=[('1', 'Забыл пароль'), ('2', 'Смена обучения'), ('3', 'Не работает')], default='3', max_length=1)),
                ('title', models.CharField(max_length=150, null=True)),
                ('description', models.TextField(blank=True)),
                ('answer', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
                ('date', models.DateTimeField(auto_now=True, null=True)),
                ('file', models.FileField(blank=True, upload_to='files/')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AdminTickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(blank=True, choices=[('1', 'Забыл пароль'), ('2', 'Смена курса '), ('3', 'Не работает ')], default='3', max_length=1)),
                ('title', models.CharField(max_length=150, null=True)),
                ('description', models.TextField(blank=True)),
                ('answer', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
                ('date', models.DateTimeField(auto_now=True, null=True)),
                ('file', models.FileField(blank=True, upload_to='files/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
