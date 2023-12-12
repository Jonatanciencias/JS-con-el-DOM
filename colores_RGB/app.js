// Referencia a los elementos del DOM
const inputRojo = document.getElementById('rojo');  // Input para el componente rojo del color RGB
const inputVerde = document.getElementById('verde');  // Input para el componente verde del color RGB
const inputAzul = document.getElementById('azul');  // Input para el componente azul del color RGB

const textoRojo = document.getElementById('textoRojo');  // Párrafo que muestra el valor del componente rojo
const textoVerde = document.getElementById('textoVerde');  // Párrafo que muestra el valor del componente verde
const textoAzul = document.getElementById('textoAzul');  // Párrafo que muestra el valor del componente azul

// Variables para extraer del color RGB input (entre 0 y 255)
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Reemplazar el texto innerText en cada párrafo
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Actualizar el texto y el color de fondo
/**
 * Actualiza el color de fondo del body y los textos con los valores RGB proporcionados.
 * @param {number} rojo - Valor del componente rojo (entre 0 y 255).
 * @param {number} verde - Valor del componente verde (entre 0 y 255).
 * @param {number} azul - Valor del componente azul (entre 0 y 255).
 */
function actualizarColor(rojo, verde, azul) {
    // Plantilla literal para variables dentro del texto
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Event listener para cada uno de los elementos input

// Actualizar el input rojo
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

// Actualizar el input verde
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

// Actualizar el input azul
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});
