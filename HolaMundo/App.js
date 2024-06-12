import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';


const Texto=()=>{ /* Creamos la varible en nuetro componente */
  /* Declarmos una variabe de contenido para el componente */
  const [contenido,setContenido]= useState('Hola Mundo')
  const actualizarContenido=()=>{setContenido('State actualizado este texto')} /* Creamos otra constante, cuando sea presionoado el texto Mundo y cuando le de click lo va a cambiar por State Actualizado*/
  return (<Text onPress={actualizarContenido} > {contenido} </Text>) /* Dentro de texto queremos que aparezca el contenido */
}

const Boton=()=>{
  const [cambio, setCambio]=useState('Presioname')
  const actualizarCambio=()=>{setCambio('Hola')}
  return (<Button onPress={actualizarCambio} > {cambio} </Button>)

}


export default function App() {
  return (

    <View style={styles.container}>

      <Texto contenido={'Hola Mundo'}> </Texto> 
      <Texto contenido={'React Native'}/> 


      <Boton litle={'Presioname'} color="#000000" ></Boton>


      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
