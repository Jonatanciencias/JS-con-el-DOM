/**
 * Obtiene un número entero aleatorio entre el rango especificado.
 * @param {number} min - El valor mínimo del rango (incluido).
 * @param {number} max - El valor máximo del rango (no incluido).
 * @returns {number} - Un número entero aleatorio.
 */
function randomInteger(min, max) {
    // No se incluye el max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

// Referencias a los elementos del DOM
let btnElem = document.getElementById('btnCambiarCita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

/**
 * Cambia la cita y su autor en la página utilizando citas aleatorias.
 */
function cambiarCita() {
    // Obtiene un índice aleatorio dentro del rango de citas
    let randomIndex = randomInteger(0, citas.length);

    // Actualiza el texto de la cita y el autor en la página
    citaElem.innerText = `"${citas[randomIndex].texto}"`;
    autorElem.innerText = citas[randomIndex].autor;
}

// Invoca la función cambiarCita para mostrar una cita al cargar la página
cambiarCita();

// Agrega un event listener al botón para cambiar la cita al hacer clic
btnElem.addEventListener('click', cambiarCita);
