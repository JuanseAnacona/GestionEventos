from django.urls import path, include
from rest_framework import routers
from inscripciones import views
from .views import enviar_mensaje

router = routers.DefaultRouter()
router.register(r"inscripciones", views.PersonasView, "inscripciones")

urlpatterns = [
    path("", include(router.urls)),
    path('enviar-mensaje/', enviar_mensaje, name='enviar_mensaje'),
]