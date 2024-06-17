import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React,{useState} from 'react';




export default function App() {

  const [text,setText]=useState('')
  const [submit,setSubmit]=useState('')

  return (

    <View style={styles.container}>

  

    <Text>Componente TextInput: {submit} </Text>

    <TextInput style={styles.input} placeholder="Escribe un texto" onChangeText={t=>setText(t)} defaultValue={text} /> {/* onchangeText  mandar llamar el setText, defaultValue mandar llamar el text de arriba*/}

    <Button title='Presioname...' onPress={ ()=>{ setSubmit(Text); alert('Texto enviado')} } />


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
    justifyContent: 'center', /* Alinea de arriba hacia bajo, flex-end alinea hacia bajo, space-around alinea en una posición equitativa, en el space-evvenly alinia los espacios */
  },
  input:{
    backgroundColor: '276B92',
    width: '50%' ,
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  }

});
