# Generated by Django 4.0.4 on 2022-04-24 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agency', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='email',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=40)),
            ],
        ),
        migrations.DeleteModel(
            name='Registered_email',
        ),
    ]