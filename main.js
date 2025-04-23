const btnPedir = document.getElementById("btn-pedir");
const btnPlantarse = document.getElementById("btn-plantarse");

//se crea el elemento imagen
let img = document.createElement('img');

// se pone la ruta de la carta que queres
img.src = 'img/cartas/ace_of_spades.png';

//Se imprime en un div
img.style.width = '100px';
img.style.height = '150px';
document.getElementById('mesa').appendChild(img);

const palos = ["hearts", "diamonds", "clubs", "spades"];

const valores = [
    { nombre: "2", valor: 2 },
    { nombre: "3", valor: 3 },
    { nombre: "4", valor: 4 },
    { nombre: "5", valor: 5 },
    { nombre: "6", valor: 6 },
    { nombre: "7", valor: 7 },
    { nombre: "8", valor: 8 },
    { nombre: "9", valor: 9 },
    { nombre: "10", valor: 10 },
    { nombre: "jack", valor: 10 },
    { nombre: "queen", valor: 10 },
    { nombre: "king", valor: 10 },
    { nombre: "ace", valor: 11 } // Podés manejar lo del 1 u 11 después
];
  

let carta = cartas[Math.floor(Math.random() * cartas.length)];



//Funciones
function PedirCarta() {

    img.src = 'cartas/ace_of_spades.png';
    document.getElementById('mesa').appendChild(img);
}