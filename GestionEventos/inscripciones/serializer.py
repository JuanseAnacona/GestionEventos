from rest_framework import serializers
from .models import Personas

class PersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personas
        fields = "__all__"
        
    def validate(self, data):
        rol = data.get('rol')

        # Validaciones basadas en el rol
        if rol == 'Asistente' and not data.get('talleres'):
            raise serializers.ValidationError({"talleres": "Este campo es obligatorio para asistentes."})
        elif rol == 'Ponente' and not data.get('titulo_presentacion'):
            raise serializers.ValidationError({"titulo_presentacion": "Este campo es obligatorio para ponentes."})
        elif rol == 'Expositor' and not data.get('nombre_stand'):
            raise serializers.ValidationError({"nombre_stand": "Este campo es obligatorio para expositores."})
        elif rol == 'Voluntario' and not data.get('disponibilidad_horaria'):
            raise serializers.ValidationError({"disponibilidad_horaria": "Este campo es obligatorio para voluntarios."})
        elif rol == 'Organizador' and not data.get('funcion_especifica'):
            raise serializers.ValidationError({"funcion_especifica": "Este campo es obligatorio para organizadores."})
        
        return data