# Generated by Django 4.2.1 on 2023-06-16 04:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('list_modules', '0002_listmodules_deadline'),
        ('test_tasks', '0003_remove_testquestionanswer_correct_answer_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='testgrade',
            name='list_modules',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='list_modules.listmodules'),
            preserve_default=False,
        ),
    ]
