# Generated by Django 4.0.4 on 2023-10-19 23:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0005_siteguidelines_delete_ministery'),
    ]

    operations = [
        migrations.CreateModel(
            name='SliderImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=150)),
                ('image', models.ImageField(upload_to='uploads/images')),
            ],
        ),
    ]
