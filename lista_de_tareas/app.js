/**
 * @typedef {Object} HTMLInputElement
 */

/**
 * @typedef {Object} HTMLButtonElement
 */

/**
 * @typedef {Object} HTMLDivElement
 */

/**
 * @typedef {Object} HTMLParagraphElement
 */

/**
 * @typedef {Object} MouseEvent
 */

/**
 * Elemento de entrada de texto para ingresar nuevas tareas.
 * @type {HTMLInputElement}
 */
const inputTareaNueva = document.getElementById('ingresarTarea');

/**
 * Botón para añadir nuevas tareas.
 * @type {HTMLButtonElement}
 */
const btnAnadir = document.querySelector('button');

/**
 * Contenedor de la lista de tareas.
 * @type {HTMLDivElement}
 */
const listaTareas = document.getElementById('listaTareas');

/**
 * Función que agrega una nueva tarea a la lista.
 */
function agregarTarea() {
    if (inputTareaNueva.value) {
        // Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        // Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = inputTareaNueva.value;
        tareaNueva.appendChild(texto);

        // Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'iconoCompletar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'iconoEliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        // Agregar tarea a la lista
        listaTareas.appendChild(tareaNueva);
    } else {
        alert('Por favor ingresa una tarea');
    }
}

/**
 * Función que marca o desmarca una tarea como completada.
 * @param {MouseEvent} e - Evento de clic en el icono de completar.
 */
function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('tareaCompletada');
}

/**
 * Función que elimina una tarea de la lista.
 * @param {MouseEvent} e - Evento de clic en el icono de eliminar.
 */
function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

// Event listeners
btnAnadir.addEventListener('click', agregarTarea);

/**
 * Event listener para agregar tarea al presionar la tecla Enter.
 * @param {KeyboardEvent} e - Evento de teclado.
 */
inputTareaNueva.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
