const API_URL = 'http://127.0.0.1:8000/api/concesionario';

async function enviarDatos() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const nuevoMensaje = {
        Nombre: nombre,
        Correo: correo,
        Mensaje: mensaje
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(nuevoMensaje)
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('mensajeResultado').innerText = 'Mensaje Enviado Correctamente';
            console.log('Respuesta del servidor:', data);
        } else {
            const errorData = await response.json();
            document.getElementById('mensajeResultado').innerText = `Error: ${errorData.message || 'Error al enviar el mensaje'}`;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        document.getElementById('mensajeResultado').innerText = 'Error de conexión con el servidor';
    }
}

document.getElementById('enviarBtn').addEventListener('click', enviarDatos);
