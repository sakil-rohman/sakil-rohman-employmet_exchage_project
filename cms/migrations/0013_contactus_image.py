# Generated by Django 4.0.4 on 2023-10-27 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0012_contactus'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactus',
            name='image',
            field=models.ImageField(default=1, upload_to='uploads/images'),
            preserve_default=False,
        ),
    ]
