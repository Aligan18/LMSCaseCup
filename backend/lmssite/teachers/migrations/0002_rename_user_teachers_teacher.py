
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teachers',
            old_name='user',
            new_name='teacher',
        ),
    ]
