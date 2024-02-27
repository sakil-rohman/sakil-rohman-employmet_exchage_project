# Generated by Django 4.0.4 on 2023-10-07 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ministery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='uploads/images')),
                ('name', models.CharField(max_length=150)),
                ('title', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
