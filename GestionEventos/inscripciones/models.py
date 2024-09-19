from django.db import models


class Personas(models.Model):
    nombre_completo = models.CharField(max_length=200, primary_key=True, blank=False)
    email = models.EmailField(blank=False)
    telefono = models.IntegerField(blank=False)
    
    ROLES = (
        ("Asistente", "Asistente"),
        ("Ponente", "Ponente"),
        ("Expositor", "Expositor"),
        ("Voluntario", "Voluntario"),
        ("Organizador", "Organizador")
    )
    
    elegir_rol = models.CharField(max_length=20, choices=ROLES, default="Asistente")
    
    talleres = models.TextField(blank=True, null=True)
    titulo_presentacion = models.CharField(max_length=255, blank=True, null=True)
    nombre_stand = models.CharField(max_length=255, blank=True, null=True)
    disponibilidad_horaria = models.CharField(max_length=50, blank=True, null=True)
    funcion_especifica = models.CharField(max_length=255, blank=True, null=True)
    
    entrada_registrada = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nombre_completo
    
class Mensaje(models.Model):
    
    ROLES = (
        ("Asistente", "Asistente"),
        ("Ponente", "Ponente"),
        ("Expositor", "Expositor"),
        ("Voluntario", "Voluntario"),
        ("Organizador", "Organizador")
    )
    rol = models.CharField(max_length=20, choices=ROLES)
    contenido = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.rol} - {self.fecha_envio}"