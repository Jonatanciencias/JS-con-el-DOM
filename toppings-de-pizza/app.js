// Para ejecutar los ejercicios quita el comentario sobre el y abre el proyecto en un navegador, observa el resultado en la consola.

// SELECCIONAR ELEMENTOS POR ID//

// ex01 Mostrar en consola el div con el id contenedora
// Solución:
// const contenedor = document.getElementById('contenedor');
// (console.log(contenedor);

// ex02 Mostar en consola la estructura html del div con id contenedor
// Solucion:
// const contenedor = document.getElementById('contenedor');
// console.log(contenedor.innerHTML);

// Ex03 Mostrar el tipo de dato de la esctructura html
// Solucion:
// const contenedor = document.getElementById('contenedor');
// console.log(typeof contenedor.innerHTML);

// Ex04 Mostrar en consola el elemento con id titulo
// Solucion:
// const titulo = document.getElementById('titulo');
// console.log(titulo);/

// Ex05 Mostrar el tipo de dato que es el elemento titulo
// Solucion:
// const titulo = document.getElementById('titulo');
// console.log(typeof titulo);

// Ex06 Mostrar el texto contenido dentro del elemento titulo
// Solucion:
// const titulo = document.getElementById('titulo');
// console.log(titulo.innerText);

// Ex 07 Mostrar el tipo de dato que contiene el elemento titulo
// Solucion:
// const titulo =document.getElementById('titulo');
// console.log(typeof titulo.innerText);

// Ex 08 Mostrar el nombre de la etiqueta del elemento titulo
// Solucion:
// const titulo = document.getElementById('titulo');
// console.log(titulo.tagName);

// SELECCIONAR ELEMENTOS POR CLASE

// Ex 09 Seleccionar todos los elementos con la clase topping
// Solucion:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings);

// Ex 10 Mostrar cuantos elementos hay con la clase topping
// Solucion:
// const toppings = document.getElementsByClassName('topping')
// console.log(toppings.length);

// Ex11 Mostrar en consola el primer elemento (Aceitunas) de la clase topping
// Solucion:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0]);

// Ex 12 Mostrar el id del primer elemento de la clase topping
// Solucion:
// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0].id);

// SELECCIONAR EN BASE AL NOMBRE LA ETIQUETA

// Ex 13 Seleccionr todos los elementos li
// Solucion:
// const misTopings = document.getElementsByTagName('li');
// console.log(misTopings);

// SELECCIONAR CSS

// Ex 14 Seleccionar el id aceitunas con querySelector
// Solucion:
// const aceitunas = document.querySelector('#aceitunas');
// console.log(aceitunas);

// Ex 15 Seleccionar el primer elemento con la clase toppings
// Solucion:
// const aceitunas = document.querySelector('.topping');
// console.log(aceitunas);

// Ex 16 Mostrar el primer elemento que comparta la clase topping y la clase fondoDos
// Solucion:
// const  toppingPar = document.querySelector('.topping.fondoDos');
// console.log(toppingPar);

// Ex 17 Seleccionar el li con fondoUno
// Solucion:
// const  toppingImpar = document.querySelector('ul li.fondoUno');
//  console.log(toppingImpar);

// Ex 18  Seleccionar el primer topping que no tenga la clase fondoDos
// Solucion
// const primerFondoUno = document.querySelector('ul li:not(.fondoDos)');
// console.log(primerFondoUno)

// Ex 19 Mostrar todos los elementos que tienen la clase topping y la clase fondoDos
// Solucion
// const  fondoDosTodos = document.querySelectorAll('.topping.fondoDos');
// console.log(fondoDosTodos);

// Ex 20 acceder al segundo topping de la clase fondoDOs
// Solucion
// const primerFondoDos = document.querySelectorAll('.topping.fondoDos');
// console.log(primerFondoDos[1]);

// PERSONALIZAR EL ESTILO CON JS

// Ex 21 Cambiar el estilo del topping aceitunas con js
// Solucion
// const nuevoColorAceitunas = document.querySelector('.topping#aceitunas');
// nuevoColorAceitunas.style.backgroundColor = 'yellow';
// nuevoColorAceitunas.style.color = 'darkblue';
// nuevoColorAceitunas.style.textTransform = 'uppercase';

// TEXTO EN EL DOM

// Ex 22 Mostrar el contenido de la lista de toppings
// Solucion 1
// const listaDeToppings = document.getElementById('toppingsList');
// console.log('> innerText');
// console.log(listaDeToppings.innerText);
// console.log(typeof listaDeToppings.innerText);

// Solucion 2
// console.log('> textContent - incluye la indentacion');
// console.log(listaDeToppings.textContent);
// console.log(typeof listaDeToppings.textContent);

// Solucion 3
// console.log('> innerHTML - Incluye toda la estructura html');
// console.log(listaDeToppings.innerHTML);
// console.log(typeof listaDeToppings.innerHTML);

// Modificar texto con Js

// Ex 23
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion

// Ex 22
// Solucion