//Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = { //par llave valor (llave es nombre - valor es Tanjiro) Tambien se llaman propiedad
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
}; // Las llaves se le conoce como objeto literal (obto creado con esta sintaxis)
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime; //Eliminar de mi lista anime

console.log(personaje);