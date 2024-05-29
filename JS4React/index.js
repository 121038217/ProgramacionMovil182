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

/* import { suma,resta} from "./calculadora.js"

console.log(suma(4,3))
console.log(resta(10,3))
*/

// ******EJEMPLO DE PROMESA **********
/*
const ul= document.createElement('ul')

let datos= fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response){
                console.log("cargar de datos completada")
                return response.json()      //regresar una respuesta con formato json
            }).then(function (data){ //regresa cuando se cumpla la siguiente promesa. Declaramos otra funcion llamaa data
                console.log(data)
                data.forEach( function (post){  //Declaramos un forEach
                    const li = document.createElement('li') //Agregamos una constante llamada li
                    li.innerHTML= post.title //crea un texto HTML con su elemento 
                    ul.append(li)
                })
                document.body.append(ul) //mandamos toda la lista completa en el body
            })   

console.log('cargando HTML')
console.log('cargando css')
console.log('cargando Imagenes')
*/

//***********  EJEMPLO CON Async Await  ****************

const ul= document.createElement('ul')

 async function cargarDatos(){ //declaramos una funcion asincrona
    const response= await fetch('https://jsonplaceholder.typicode.com/posts') //tiene una contantes llamada respuesta, y va a tener una promesa con await.dentro de fetch usamos la dirección de la API
    const datos= await response.json() //declaramos otra constante llamada datos que va a tener una promeda await, y va a trabajar sore la repsuesta de la promesa que esta guardada en response en formato json
    console.log(datos) // imprimimos los datos
    datos.forEach( function (post){  //Declaramos un forEach
        const li = document.createElement('li') //Agregamos una constante llamada li
        li.innerHTML= post.title //crea un texto HTML con su elemento 
        ul.append(li)
    })
    document.body.append(ul) //mandamos toda la lista completa en el body
 }

cargarDatos() //llamamos la función carcar datos
console.log('cargando HTML')
console.log('cargando css')
console.log('cargando Imagenes')

