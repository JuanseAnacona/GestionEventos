from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializer import PersonasSerializer
from .models import Personas, Mensaje
from .forms import MensajeForm
from django.contrib import messages

# Create your views here.

class PersonasView(viewsets.ModelViewSet):
    serializer_class = PersonasSerializer
    queryset = Personas.objects.all()
    
    
def enviar_mensaje(request):
    if request.method == 'POST':
        form = MensajeForm(request.POST)
        if form.is_valid():
            mensaje = form.save()
            # Enviar mensaje a los usuarios correspondientes
            rol = mensaje.rol
            personas = Personas.objects.filter(elegir_rol=rol)
            for persona in personas:
                # Aquí deberías implementar la lógica para enviar el mensaje al usuario
                # Por ejemplo, podrías enviar un correo electrónico
                pass
            messages.success(request, 'Mensaje enviado con éxito.')
            return redirect('enviar_mensaje')
    else:
        form = MensajeForm()
    return render(request, 'enviar_mensaje.html', {'form': form})
