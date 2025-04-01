const API_URL = 'https://retoolapi.dev/rCS955/data';

// Función para enviar datos
async function enviarDatos() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const nuevoMensaje = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoMensaje)
        });

        if (response.ok) {
            document.getElementById('mensajeResultado').innerText = 'Mensaje Enviado';
        } else {
            document.getElementById('mensajeResultado').innerText = 'Error al enviar el mensaje';
        }
        const data = await response.json();
    } catch (error) {
        document.getElementById('mensajeResultado').innerText = 'Error al enviar el mensaje';
    }
}

document.getElementById('enviarBtn').addEventListener('click', enviarDatos);