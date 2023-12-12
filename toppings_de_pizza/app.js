// Para ejecutar los ejercicios quita el comentario sobre el y abre el proyecto en un navegador, observa el resultado en la consola.

// SELECCIONAR ELEMENTOS POR ID

// Ex01: Mostrar en consola el div con el id contenedora
// Solución:
// const contenedor = document.getElementById('contenedor');
// console.log(contenedor);

// Ex02: Mostar en consola la estructura html del div con id contenedor
// Solución:
// const contenedor = document.getElementById('contenedor');
// console.log(contenedor.innerHTML);

// Ex03: Mostrar el tipo de dato de la estructura html
// Solución:
// const contenedor = document.getElementById('contenedor');
// console.log(typeof contenedor.innerHTML);

// Ex04: Mostrar en consola el elemento con id titulo
// Solución:
// const titulo = document.getElementById('titulo');
// console.log(titulo);

// Ex05: Mostrar el tipo de dato que es el elemento titulo
// Solución:
// const titulo = document.getElementById('titulo');
// console.log(typeof titulo);

// Ex06: Mostrar el texto contenido dentro del elemento titulo
// Solución:
// const titulo = document.getElementById('titulo');
// console.log(titulo.innerText);

// Ex07: Mostrar el tipo de dato que contiene el elemento titulo
// Solución:
// const titulo = document.getElementById('titulo');
// console.log(typeof titulo.innerText);

// Ex08: Mostrar el nombre de la etiqueta del elemento titulo
// Solución:
// const titulo = document.getElementById('titulo');
// console.log(titulo.tagName);

// SELECCIONAR ELEMENTOS POR CLASE

// Ex09: Seleccionar todos los elementos con la clase topping
// Solución:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings);

// Ex10: Mostrar cuántos elementos hay con la clase topping
// Solución:
// const toppings = document.getElementsByClassName('topping')
// console.log(toppings.length);

// Ex11: Mostrar en consola el primer elemento (Aceitunas) de la clase topping
// Solución:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0]);

// Ex12: Mostrar el id del primer elemento de la clase topping
// Solución:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0].id);

// SELECCIONAR EN BASE AL NOMBRE DE LA ETIQUETA

// Ex13: Seleccionar todos los elementos li
// Solución:
// const misTopings = document.getElementsByTagName('li');
// console.log(misTopings);

// SELECCIONAR CSS

// Ex14: Seleccionar el id aceitunas con querySelector
// Solución:
// const aceitunas = document.querySelector('#aceitunas');
// console.log(aceitunas);

// Ex15: Seleccionar el primer elemento con la clase toppings
// Solución:
// const aceitunas = document.querySelector('.topping');
// console.log(aceitunas);

// Ex16: Mostrar el primer elemento que comparta la clase topping y la clase fondoDos
// Solución:
// const  toppingPar = document.querySelector('.topping.fondoDos');
// console.log(toppingPar);

// Ex17: Seleccionar el li con fondoUno
// Solución:
// const  toppingImpar = document.querySelector('ul li.fondoUno');
//  console.log(toppingImpar);

// Ex18: Seleccionar el primer topping que no tenga la clase fondoDos
// Solución:
// const primerFondoUno = document.querySelector('ul li:not(.fondoDos)');
// console.log(primerFondoUno);

// Ex19: Mostrar todos los elementos que tienen la clase topping y la clase fondoDos
// Solución:
// const  fondoDosTodos = document.querySelectorAll('.topping.fondoDos');
// console.log(fondoDosTodos);

// Ex20: Acceder al segundo topping de la clase fondoDos
// Solución:
// const primerFondoDos = document.querySelectorAll('.topping.fondoDos');
// console.log(primerFondoDos[1]);

// PERSONALIZAR EL ESTILO CON JS

// Ex21: Cambiar el estilo del topping aceitunas con js
// Solución:
// const nuevoColorAceitunas = document.querySelector('.topping#aceitunas');
// nuevoColorAceitunas.style.backgroundColor = 'yellow';
// nuevoColorAceitunas.style.color = 'darkblue';
// nuevoColorAceitunas.style.textTransform = 'uppercase';

// TEXTO EN EL DOM

// Ex22: Mostrar el contenido de la lista de toppings
// Solución 1:
// const listaDeToppings = document.getElementById('toppingsList');
// console.log('> innerText');
// console.log(listaDeToppings.innerText);
// console.log(typeof listaDeToppings.innerText);

// Solución 2:
// console.log('> textContent - incluye la indentación');
// console.log(listaDeToppings.textContent);
// console.log(typeof listaDeToppings.textContent);

// Solución 3:
// console.log('> innerHTML - Incluye toda la estructura html');
// console.log(listaDeToppings.innerHTML);
// console.log(typeof listaDeToppings.innerHTML);

// Ex23: Cambiar el contenido del elemento con id titulo
// Solución:
// const titulo = document.getElementById('titulo');
// titulo.innerText = 'Mis adiciones favoritas';

// Ex24: Mostrar los atributos del elemento con el nombre a
// Solución:
// const google = document.getElementsByTagName('a');
// console.log(google[0].attributes);
// console.log(google[0].getAttribute('href'));

// Ex25: Remover el atributo href del elemento con el nombre a
// Solución:
// const google = document.getElementsByTagName('a');
// console.log(google[0].removeAttribute('href'));

// Ex26: Asignar un nuevo texto y cambiar el href del elemento con el nombre a
// Solución:
// const google = document.getElementsByTagName('a');
// google[0].innerText = 'YouTube';
// google[0].setAttribute('href', 'https://www.youtube.com/');
// console.log(google[0].innerText);
// console.log(google[0].getAttribute('href'));

// Ex27: Modificar las clases del primer elemento con la clase toppings
// Solución:
// const  primerTopping = document.querySelector('.topping');
// console.log(primerTopping.classList);

// Agregamos la clase nuevoSabor
// primerTopping.classList.add('nuevoSabor');
// console.log(primerTopping.classList);

// Eliminamos la clase fondoUno
// primerTopping.classList.remove('fondoUno');
// console.log(primerTopping.classList);

// Ex28: Verificar si el elemento primer topping tiene la clase
// Solución:
// const primerToping = document.querySelector('.topping');
// console.log(primerToping.classList.contains('fondoUno'));

// Ex29: Añadir un nuevo elemento html al elemento con id lista-toppings
// Solución:
// const  listaDeToppings = document.getElementById('lista-toppings');
// const quesoExtra = document.createElement('li');
// quesoExtra.classList.add('topping', 'fondoUno');
// quesoExtra.innerText = 'Queso Extra';
// listaDeToppings.append(quesoExtra);

// Ex30: Eliminar elemento html al elemento quesoExtra
// Solución:
// quesoExtra.remove();

// Recorrer el DOM

// Ex31: Obtener el parentNode y el elemento de la lista-topping
// Solución:
// const listaDeTopping = document.getElementById('lista-toppings');
// console.log(listaDeTopping.parentElement);
// console.log(listaDeTopping.parentNode);

// Ex32: Obtener los nodos child de la lista-toppings
// Solución:
// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings.children);
// console.log(listaDeToppings.children[0]);
// console.log(listaDeToppings.firstElementChild);
// console.log(listaDeToppings.lastElementChild);
// console.log(listaDeToppings.childNodes);
// console.log(listaDeToppings.childElementCount);

// Ex33: Obtener el elemento hermano anterior y posterior de lista-toppings
// Solución:
// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings.previousElementSibling);
// console.log(listaDeToppings.nextElementSibling);

// MANEJAR EVENTOS

// Ex34: Mostrar en la consola un texto al hacer clic
// Solución:
// Se debe asignar <onclick="mostrarClic('Aceitunas')"> a los elementos de la lista toppings
// function mostrarClic(toppings) {
//     console.log(toppings);
// }

// Ex35: Agregar un addEventListener al hacer clic en albahaca que muestre su información
// Solución:
// const albahaca = document.getElementById('albahaca');
// function mostrarClic(e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);
// }
// albahaca.addEventListener('click', mostrarClic);

// Ex36: Asignar un addEventListener a todos los toppings para mostrar información
// Solución 1:
// const toppings = document.getElementsByClassName('topping');
// function mostrarClic(e){
//     console.log(e.target.innerText);
// }
// for (const topping of toppings){
//     topping.addEventListener('click', mostrarClic);
// }

// Solución 2:
const toppings = document.getElementsByClassName('topping');
let topping;
for (topping of toppings){
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}
