
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_initial'),
        ('test_tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='testansweroptions',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='course.course'),
        ),
        migrations.AddField(
            model_name='testgrade',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='course.course'),
        ),
        migrations.AddField(
            model_name='testquestionanswer',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='course.course'),
        ),
        migrations.AddField(
            model_name='testtasks',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='course.course'),
        ),
    ]
