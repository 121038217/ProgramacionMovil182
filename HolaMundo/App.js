import React, { useState, useEffect } from 'react'; //importamos useEffect que es para extraer datos o mandar llamar datos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'; //Agregamos ActivityIndicator

export default function App() {
  
  const [user,setUser] = useState([]) //Colocamos una constante para los usuarios
  const [loading,setLoading] = useState(true) //Colocamos una constante para recargar

  useEffect(()=>{ //Para usar el UseEffect Agregamos una funcion y un arreglo
      fetch('https://jsonplaceholder.typicode.com/users') //Estructuramos la promesa con la URL de la API
      .then(response=> response.json()) //con la respuesta del API lo convierta a un JSON
      .then(data=>{setUser(data), setLoading(false)}) //Pasar los datos a setUser en la variable data. Cambiar la popierdad de setLoading a False
    
  },[]) 

  if(loading){ //Para saber si esta cargando
    return <View style={styles.center} > {/* Regresar una vista */}
        <ActivityIndicator size='large' color='#0000ff' /> 
      <Text> Cargando </Text>
    </View> 
  }

  return (
  
  <View style={styles.container}>

    <FlatList //Agregamos el FlatList para mostrar los datos de la API
      data={user} //Cargamos los datos con user
      renderItem={({item})=> <Text style={styles.item}> {item.username} {item.address.city} </Text>} //Mostramos la información con Text
    />


      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', /* se usa para dar orientación al texto, ya se a que es row o colum */
    backgroundColor: '#fff',
    alignItems: 'strech', /* felx-start posición al inicio/ flex-end posición al final/strech toma todo el espacio */
    justifyContent: 'center', /* Alinea de arriba hacia bajo, flex-end alinea hacia bajo, space-around alinea en una posición equitativa, en el space-evvenly alinia los espacios */
    paddingTop:50, /* Para bajar la vista de la parte superior */
  },
  item: {
    padding:10,
    fontSize:24,
    height:50, 
    borderColor:'blue',
    borderBottomWidth:1
  },
  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },

});