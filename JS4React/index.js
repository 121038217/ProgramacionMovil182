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

const titulo= document.createElement('h1')  //Creamos una constante llamada titulo
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