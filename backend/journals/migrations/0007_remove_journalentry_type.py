# Generated by Django 5.0.6 on 2024-07-18 10:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('journals', '0006_journalentry_image_journalentry_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='journalentry',
            name='type',
        ),
    ]