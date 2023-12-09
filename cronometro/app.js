/**
 * Obtiene el elemento del botón de inicio/pausa del DOM.
 * @type {HTMLElement}
 */
const btnInicioPausa = document.getElementById('btnInicioPausa');

/**
 * Obtiene el elemento del botón de reinicio del DOM.
 * @type {HTMLElement}
 */
const btnReiniciar = document.getElementById('btnReiniciar');

/**
 * Obtiene el elemento del cronómetro del DOM.
 * @type {HTMLElement}
 */
const cronometro = document.getElementById('cronometro');

/**
 * Almacena las horas, minutos y segundos del cronómetro.
 * @type {number[]}
 */
let [horas, minutos, segundos] = [0, 0, 0];

/**
 * Almacena el ID del intervalo de tiempo para el cronómetro.
 * @type {number}
 */
let intervaloTiempo;

/**
 * Almacena el estado actual del cronómetro ('play' o 'stop').
 * @type {string}
 */
let estadoCronometro = 'stop';

/**
 * Actualiza el cronómetro incrementando los segundos y actualizando los minutos y horas según sea necesario.
 */
function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    const sgFormato = asignarFormato(segundos);
    const minFormato = asignarFormato(minutos);
    const horasFormato = asignarFormato(horas);

    cronometro.innerText = `${horasFormato}:${minFormato}:${sgFormato}`;
}

/**
 * Añade un cero delante de la unidad de tiempo si es menor que 10.
 * @param {number} unidadTiempo - La unidad de tiempo a formatear.
 * @returns {string} - La unidad de tiempo formateada.
 */
function asignarFormato(unidadTiempo) {
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo.toString();
}

/**
 * Event listener para el botón de inicio/pausa.
 */
btnInicioPausa.addEventListener('click', function () {
    if (estadoCronometro === 'stop') {
        intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
        btnInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
        btnInicioPausa.classList.remove('btnPlay');
        btnInicioPausa.classList.add('btnStop');
        estadoCronometro = 'play';
    } else {
        window.clearInterval(intervaloTiempo);
        btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        btnInicioPausa.classList.remove('btnStop');
        btnInicioPausa.classList.add('btnPlay');
        estadoCronometro = 'stop';
    }
});

/**
 * Event listener para el botón de reinicio.
 */
btnReiniciar.addEventListener('click', function () {
    window.clearInterval(intervaloTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    // Actualizar botones
    cronometro.innerText = '00:00:00'
    btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    btnInicioPausa.classList.remove('btnStop');
    btnInicioPausa.classList.add('btnPlay');

    // Estado
    estadoCronometro = 'stop';
});

