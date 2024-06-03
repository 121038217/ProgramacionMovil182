/* I. Declara el siguiente arreglo:

i. numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

II. Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo
llamado pares que contenga solo los pares de arreglo numeros

III. Imprimir los 2 arreglos como resultado

*/

const numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

for (let i=0; i<numeros.length; i++){
    const elemento = numeros[i]
    console.log(numeros)
}

const pares = numeros.filter(function(numero){
    if (numero %2 === 0){
        return numero
    }
})

console.log(pares)


/* I. Declara el siguiente arreglo
estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];
II. Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años
III. Imprimir los 2 arreglos como resultado

*/

const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

    for (let i=0; i<estudiantes.length; i++){
        const elemento = estudiantes[i]
        console.log(estudiantes)
    }

const mayores = estudiantes.filter(function(estudiante){
    if(estudiante.age >=18){
        return estudiante.name
    }
})

console.log(...mayores)
    


