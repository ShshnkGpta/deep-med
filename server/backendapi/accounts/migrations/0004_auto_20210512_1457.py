# Generated by Django 3.2 on 2021-05-12 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_profile_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='sex',
        ),
        migrations.AddField(
            model_name='profile',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Trans', 'Trans'), ('Other', 'Other')], default='Male', max_length=10),
            preserve_default=False,
        ),
    ]
