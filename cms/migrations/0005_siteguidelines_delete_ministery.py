# Generated by Django 4.0.4 on 2023-10-19 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0004_rename_galleryimage_minister'),
    ]

    operations = [
        migrations.CreateModel(
            name='SiteGuidelines',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=150)),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Ministery',
        ),
    ]