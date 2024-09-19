Sistema de Gestión de Eventos
Este proyecto es una plataforma para la gestión de eventos que incluye el registro de asistentes, la asignación de roles, el control de acceso y la comunicación con los asistentes segmentados por su rol.

Características
Registro de Asistentes

Los usuarios pueden registrarse al evento proporcionando información como nombre, correo electrónico, teléfono y seleccionando un rol (Asistente, Ponente, Expositor, Voluntario, Organizador).
El formulario cambia dinámicamente según el rol seleccionado, mostrando campos específicos para cada rol.
Al final del registro, se muestra un resumen de los datos ingresados antes de finalizar el proceso.
Panel de Administración

Los administradores pueden ver y gestionar los asistentes registrados.
Registro manual de entrada al evento, donde los administradores pueden buscar asistentes por nombre o correo y marcar su entrada.
Mensajes de confirmación de entrada exitosa en el panel.
Comunicación y Notificaciones

Los administradores pueden enviar mensajes a los asistentes segmentados por su rol.
Un historial de los mensajes enviados se guarda con la fecha y hora en que fueron enviados.
Control de Acceso

El sistema permite a los administradores marcar manualmente la entrada de los asistentes en el evento.
Visualización en el panel de administración del estado de entrada de cada asistente.
Requerimientos del Proyecto
Python 3.7+
Django 3.2+
Django Rest Framework
Node.js (para el frontend con React)
Axios (para la comunicación entre frontend y backend)
React Hook Form (para el manejo de formularios en React)
Django Admin (para la gestión de asistentes y envío de notificaciones)
Instalación y Configuración
Backend (Django)
Clona este repositorio:

git clone https://github.com/usuario/proyecto-eventos.git
cd proyecto-eventos

Crea un entorno virtual y activa el entorno:

python -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate

Instala las dependencias del backend:

pip install -r requirements.txt
Realiza las migraciones para configurar la base de datos:

python manage.py migrate
Crea un superusuario para acceder al panel de administración de Django:

python manage.py createsuperuser

Ejecuta el servidor de desarrollo:

python manage.py runserver

Accede al panel de administración desde:

http://localhost:8000/admin/


Frontend (React)
Dirígete a la carpeta del frontend:

cd GestionEventos
Instala las dependencias del proyecto React:

npm install
Ejecuta la aplicación de React:

npm start

Accede al frontend desde:

http://localhost:3000/

API Endpoints
/registro/inscripciones/: Punto de registro de asistentes (POST).
/registro/entrada/: Control de acceso (GET, POST).
/enviar-mensaje/: Envío de notificaciones segmentadas por rol (POST).

Funcionalidades Detalladas

1. Registro de Asistentes
En el formulario de registro de asistentes, los campos se ajustan automáticamente según el rol seleccionado (Asistente, Ponente, Expositor, Voluntario, Organizador). Este formulario usa React Hook Form para manejar la validación y el envío de datos a la API de Django mediante Axios.

El flujo del formulario es el siguiente:

El usuario ingresa sus datos personales y selecciona un rol.
Se muestran campos adicionales según el rol elegido.
El usuario puede revisar un resumen de los datos antes de finalizar el registro.

2. Panel de Administración
Los administradores pueden visualizar la lista de asistentes registrados, marcando manualmente su entrada al evento desde el panel.
Se proporciona un botón para confirmar la entrada, que actualiza el estado de entrada_registrada del asistente.

3. Comunicación y Notificaciones
Los administradores pueden enviar mensajes a asistentes específicos según su rol (Asistente, Ponente, etc.).
Se guarda un historial de mensajes en la base de datos, con la fecha y hora del envío.
Los administradores pueden redactar mensajes usando un editor de texto básico en el panel de administración.
Personalización
Notificaciones: Para personalizar la forma en la que se envían las notificaciones (por ejemplo, mediante correo electrónico o mensajes SMS), puedes modificar la lógica de envío en la función enviar_notificacion del archivo views.py.
Control de Acceso: El control de acceso se puede adaptar para incluir registros automáticos usando tecnología de escaneo de código QR o NFC.
