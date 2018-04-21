# Generated by Django 2.0.3 on 2018-04-21 05:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_favorites_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favorites',
            name='image',
        ),
        migrations.AddField(
            model_name='favorites',
            name='favorites_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.Register'),
        ),
    ]