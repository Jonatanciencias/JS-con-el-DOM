let btnElem = document.getElementById('btnCambiarCita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function randomInteger(min, max) {
    // No se incluye el max en los valores posibles
    return Math.floor(Math.random() * (max -min) + min)
}

function cambiarCita(){
    let  randomIndex = randomInteger(0, citas.length);
    citaElem.innerText = `"${citas[randomIndex].texto}"`;
    autorElem.innerText = citas[randomIndex].autor;
}

cambiarCita();

btnElem.addEventListener('click',cambiarCita);
