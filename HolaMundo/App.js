import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import fondoImagen from './assets/imagen_fondo/imagen.jpg'; 

export default function App() {
  const [text, setText] = useState('');
  const [submit, setSubmit] = useState('');

  return (
    <View style={styles.container}>
      
      <Text>Componente TextInput: {submit}</Text>
      
      <TextInput  style={styles.input}  placeholder="Escribe un texto" onChangeText={t => setText(t)} defaultValue={text}/> {/* onchangeText  mandar llamar el setText, defaultValue mandar llamar el text de arriba*/}
      
      <TouchableOpacity style={styles.boton} onPress={() => { setSubmit(text); alert('Texto enviado'); }}>
        
      <Text style={styles.botonText}>Presioname...</Text>
      
      </TouchableOpacity>

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
  input: {
    backgroundColor: '276B92',
    width: '50%',
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  boton: {
    backgroundColor: "#FF69B4",  // Color de fondo rosa del botón
    paddingVertical: 15,         // Espaciado vertical dentro del botón
    paddingHorizontal: 25,       // Espaciado horizontal dentro del botón
    borderRadius: 30,            // Bordes redondeados
    alignItems: 'center',        // Alineación del contenido del botón
    borderWidth: 5,              // Ancho del borde
    borderColor: '#d6d7da',      // Color del borde
    marginTop: 20,
  },
  botonText: {
    color: '#fff',               // Color del texto
    fontSize: 16,                // Tamaño del texto
    fontWeight: 'bold',          // Peso del texto
    letterSpacing: 1,            // Espaciado entre letras
    textTransform: 'uppercase',  // Transformación del texto a mayúsculas
  },
});