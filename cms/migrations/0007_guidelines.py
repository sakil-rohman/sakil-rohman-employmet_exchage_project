# Generated by Django 4.0.4 on 2023-10-25 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0006_sliderimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Guidelines',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=50, null=True)),
                ('heading', models.CharField(max_length=150)),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
    ]
