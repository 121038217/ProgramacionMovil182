import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';


const Texto=({estilo})=>{ /* Creamos la varible en nuetro componente. Propiedad estilo */
  /* Declarmos una variabe de contenido para el componente */
  const [contenido,setContenido]= useState('Hola Mundo')
  const actualizarContenido=()=>{setContenido('State actualizado este texto')} /* Creamos otra constante, cuando sea presionoado el texto Mundo y cuando le de click lo va a cambiar por State Actualizado*/
  return (<Text style={[styles.text,estilo]} onPress={actualizarContenido} > {contenido} </Text>) /* Dentro de texto queremos que aparezca el contenido. Agregamos en la prpiedad style */
}

export default function App() {
  return (

    <View style={styles.container}>

      <Texto estilo={styles.red}/> {/* Agregamos el estilo y color en el Texto Hola Mundo */}
      <Texto estilo={styles.green}/> 
      <Texto estilo={styles.blue}/> 


      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', /* se usa para dar orientación al texto, ya se a que es row o colum */
    backgroundColor: '#fff',
    alignItems: 'center', /* felx-start posición al inicio/ flex-end posición al final/strech toma todo el espacio */
    justifyContent: 'flex-end',
  },
  text:{
    color:'yellow',
    fontSize: 25,
  },
  red:{
    /*flex:1,*/

    backgroundColor:'red',
  },
  green:{
  /*flex:2,*/
    backgroundColor:'green',
  },
  blue:{
  /*flex:3,*/
    backgroundColor:'blue',
  }
});
