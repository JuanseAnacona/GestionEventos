from django.contrib import admin
from .models import Personas, Mensaje
# Register your models here.
class PersonasAdmin(admin.ModelAdmin):
    list_display = ('nombre_completo', 'email', 'telefono', 'elegir_rol', 'entrada_registrada')
    list_filter = ('elegir_rol', 'entrada_registrada')
    search_fields = ('nombre_completo', 'email')
    
    def mark_entry_as_registered(self, request, queryset):
        """Marca la entrada como registrada para los objetos seleccionados."""
        count = queryset.update(entrada_registrada=True)
        self.message_user(request, f'{count} entrada(s) registrada(s) con éxito.')
    
    mark_entry_as_registered.short_description = "Marcar entrada(s) como registrada(s)"
    
    actions = [mark_entry_as_registered]
    
class MensajeAdmin(admin.ModelAdmin):
    list_display = ('rol', 'contenido', 'fecha_envio')
    list_filter = ('rol',)
    search_fields = ('rol', 'contenido')

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['rol'].queryset = Personas.objects.values_list('elegir_rol', flat=True).distinct()
        return form

admin.site.register(Personas, PersonasAdmin)
admin.site.register(Mensaje, MensajeAdmin)