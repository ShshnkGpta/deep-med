# Generated by Django 3.0.3 on 2021-05-31 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_auto_20210531_1217'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='report',
            name='patient',
        ),
    ]
