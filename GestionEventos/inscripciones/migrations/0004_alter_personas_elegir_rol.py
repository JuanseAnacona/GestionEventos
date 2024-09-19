# Generated by Django 5.0.6 on 2024-09-16 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripciones', '0003_alter_personas_elegir_rol'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personas',
            name='elegir_rol',
            field=models.CharField(choices=[('Asistente', 'Asistente'), ('Ponente', 'Ponente'), ('Expositor', 'Expositor'), ('Voluntario', 'Voluntario'), ('Organizador', 'Organizador')], default=None, max_length=20),
        ),
    ]
