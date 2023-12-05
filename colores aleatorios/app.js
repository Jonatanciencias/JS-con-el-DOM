// Seleccionar los elementos del DOM
const btnColor = document.getElementById('btnColor');
const colorCode = document.getElementById('colorCode');

// Función para generar los colores
function randomColorGenerator () {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
// genera un numero de 0 a 16 (index) y despues escoge un caracter con ese
// index en digitos para despues añadirlo a colorHex
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colorHex += digitos[randomIndex];
    }
    return colorHex;
}

// Asocia el click en el btnColor con la funcion randomColorGenerator y crea
// un funcion anidada con dos acciones
btnColor.addEventListener('click', function () {
    // Obtiene el colorCode usando la funcion randomColorGenerator
    let randomColor = randomColorGenerator();
    // Actualiza el texto
    colorCode.textContent = randomColor;
    // Actualiza el color de fondo
    document.body.style.backgroundColor = randomColor;
});
