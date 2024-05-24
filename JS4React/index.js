// funcion
/*
function suma(a,b){
    return a+b;
}

console.log(suma(2,3));
*/


/*funcion fatArrow
const suma= (a,b)=>{
    return a+b
}
*/

/*fat Arrow Function simplificada
const suma= (a,b)=> a+b 

console.log(suma(2,3))
*/

/*
const usuario={
    nombre: 'lili',
    apellido: 'maldonado',
    edad: 27,
    direccion:{
        pais: 'México',
        ciudad: 'Qro',
        calle: 'av 26'
    },
    amigos:['Monse','Alan'],
    estatus: true, 
    enviaCorreo: enviarCorr=()=> 'envian-do..'
}
//console.log(usuario) //Mostrar los elementos
//console.log(usuario.direccion)

//Metodos
console.log(usuario.enviaCorreo())
*/

// TRABAJO CON EL DOM

/*const titulo= document.createElement('h1')  //Creamos una constante llamada titulo
titulo.innerText='Soy un titulo creado con JS'  //Agregamos un texto al titulo
document.body.append(titulo)

//posicionar un boton
const boton= document.createElement('button')
boton.innerText='Presioname'
document.body.append(boton)

// para que funcione el botón
boton.addEventListener('click',function(){
    // console.log('Evento click ejecutado') 
    titulo.innerText="Evento click ejecutado" //modificamos el titulo
    alert('Exito')
})
*/


// ****************** TRABAJO CON ARREGLOS ******************

const nombres= ['Alan','Isa','Pablo','Juan Luis']

/*for(let i= 0 ; i< nombres.length; i++){
    const elemento=nombres[i]
    console.log(elemento)
}

nombres.forEach(function (nombre){
    console.log(nombre)
}) 
*/

// -------------------------------- ARRAY 2 -----------------------------
/*
const array2= nombres.map(function(nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)
*/

// ------------------- FUNCION FIND: Ubicar elemetos en un arreglo --------------------
/*
const resultado= nombres.find(function(nombre){
    if(nombre === 'Pablo'){
        return nombre
    }
})

console.log(resultado)
*/

// -------------- FUNCION Filter: Recorre el arreglo filtrando un resultado en otro -----
/*
const resultado= nombres.filter(function(nombre){
    if(nombre != 'Pablo'){
        return nombre
    }
})

console.log(nombres)
console.log(resultado)
*/

// -------------- FUNCION Concat: -----
/*
const edades= [78,89,12,8,10,15]
console.log(nombres.concat(edades))

// Spread Operator
console.log([...nombres,...edades])
*/

// ********** MODULOS: IMPORT & EXPORT *********** 

import { suma,resta} from "./calculadora.js"

console.log(suma(4,3))
console.log(resta(10,3))




