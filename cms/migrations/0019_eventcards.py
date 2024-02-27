# Generated by Django 4.0.4 on 2023-10-31 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0018_notification'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventCards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=50, null=True)),
                ('heading', models.CharField(max_length=150)),
                ('description', models.CharField(blank=True, max_length=100000, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads/images')),
            ],
        ),
    ]