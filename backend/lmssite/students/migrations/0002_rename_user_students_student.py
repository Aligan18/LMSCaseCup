<<<<<<< HEAD
# Generated by Django 4.2.1 on 2023-06-13 05:31
=======
# Generated by Django 4.2.1 on 2023-06-13 06:41
>>>>>>> aeca88516740534e25b897f23486ce91d3394618

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='students',
            old_name='user',
            new_name='student',
        ),
    ]
