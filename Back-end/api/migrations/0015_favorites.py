# Generated by Django 2.0.3 on 2018-04-20 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20180420_1527'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorites',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
