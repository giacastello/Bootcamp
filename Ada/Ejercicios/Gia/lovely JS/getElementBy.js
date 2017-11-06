getElementById('id') //element en singular
getElementsByClassName('className')



var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

//cajas[0].textContent =   "hola mundo";

//primeraCaja es un div, innerHTML es una función, y el H1 es el contenido del div.
primeraCaja.innerHTML = '<h1> Hola mundo </h1>';

var caja = document.createElement('div');
var contenido = document.createTextNode('hola');
caja.appendChild(contenido);

caja.setAttribute('class','caja naranja')

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);
