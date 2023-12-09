// Seleccionar los elementos del DOM
const btnColor = document.getElementById('btnColor');
const colorCode = document.getElementById('colorCode');

/**
 * Genera un color hexadecimal aleatorio.
 * @returns {string} - Color hexadecimal generado.
 */
function randomColorGenerator() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    // Genera un número de 0 a 16 (índice) y después elige un carácter con ese índice en 'digitos',
    // luego lo agrega a 'colorHex'.
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colorHex += digitos[randomIndex];
    }
    return colorHex;
}

// Asocia el evento de clic en el btnColor con la función randomColorGenerator y crea
// una función anidada con dos acciones.
btnColor.addEventListener('click', function () {
    // Obtiene el color hexadecimal usando la función randomColorGenerator.
    let randomColor = randomColorGenerator();
    
    // Actualiza el texto del elemento colorCode con el color hexadecimal generado.
    colorCode.textContent = randomColor;
    
    // Actualiza el color de fondo del cuerpo del documento.
    document.body.style.backgroundColor = randomColor;
});
