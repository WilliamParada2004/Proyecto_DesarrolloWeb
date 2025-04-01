const imagenes = ["Imagenes/Primero.jpg", "Imagenes/Segundo.jpg", "Imagenes/Tercero.jpg"]; // Lista de imágenes
let indice = 0; // Índice de la imagen actual
const imagenes2 = ["Imagenes/PrimeroMotos.jpg", "Imagenes/SegundoMotos.jpg", "Imagenes/TerceroMotos.jpg"]; // Lista de imágenes
let indice2 = 0; // Índice de la imagen actual
        
function cambiarImagen() {
    document.getElementById("Ciclo").src = imagenes[indice]; // Cambia la imagen
    indice = (indice + 1); // Alterna entre 0 y 1
    if (indice==3) {
        indice = 0;
    }
}

function cambiarImagen2() {
    document.getElementById("Ciclo2").src = imagenes2[indice2]; // Cambia la imagen
    indice2 = (indice2 + 1); // Alterna entre 0 y 1
    if (indice2==3) {
        indice2 = 0;
    }
}

setInterval(cambiarImagen, 3250); // Cambia la imagen cada 3 segundos (3500 ms)
setInterval(cambiarImagen2, 3800); // Cambia la imagen cada 3 segundos (3500 ms)