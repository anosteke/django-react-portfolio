# Generated by Django 5.0.7 on 2024-08-05 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=250)),
                ('skills', models.JSONField(default=list)),
                ('imageUrl', models.URLField()),
            ],
        ),
    ]
