# Generated by Django 2.0.3 on 2018-04-20 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_favorites'),
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
    ]
