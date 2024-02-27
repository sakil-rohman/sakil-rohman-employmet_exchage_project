# Generated by Django 4.0.4 on 2023-10-27 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0011_footeraddress'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('designation', models.CharField(blank=True, max_length=50, null=True)),
                ('phone', models.CharField(blank=True, max_length=50, null=True)),
                ('email', models.CharField(max_length=150)),
                ('address', models.CharField(blank=True, max_length=100000, null=True)),
            ],
        ),
    ]