// referencia a los elementos del DOM
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('textoRojo');
const textoVerde = document.getElementById('textoVerde');
const textoAzul = document.getElementById('textoAzul');

// Variables para extraer del color RGB input (entre 0 y 255)
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Reemplazar el texto innerText en cada párrafo
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Actualizar el texto y el color de fondo
function actualizarColor (rojo, verde, azul) {
    // Plantilla literal para varibales dentro del texto
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// event listener para cada uno de los elementos input

// actualizar el input rojo
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul)
});

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul)
});

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul)
});



