# Generated by Django 5.0.7 on 2024-08-09 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='emp_id',
            field=models.IntegerField(unique=True),
        ),
    ]
