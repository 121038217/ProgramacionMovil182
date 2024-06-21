import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';

import fondoImagen from './assets/imagen_fondo/imagen.jpg';

export default function App() {
  const [nombre, setNombre] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleGuardar = () => { 
    if (nombre === '' || email === '' || password === '') {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    
    const mensaje = `Nombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`;
    Alert.alert('Formulario Enviado', mensaje);
    
    setNombre('');
    setEmail('');
    setPassword('');
  };

  return (
    <ImageBackground source={fondoImagen} style={styles.background}> 
      <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.formContainer}> 

      <Text>Nombre: </Text>
      <TextInput style={styles.input} onChangeText={t => setNombre(t)} value={nombre} />
      
      <Text>Email:</Text>
      <TextInput style={styles.input} onChangeText={t => setEmail(t)} value={email} />
      
      <Text>Password:</Text>
      <TextInput style={styles.input} onChangeText={t => setPassword(t)} value={password} secureTextEntry={true} />

      <TouchableOpacity style={styles.boton} onPress={handleGuardar}>
        <Text style={styles.botonText}>Guardar</Text>
      </TouchableOpacity>
      
      <StatusBar style="dark-content" />
      </View>
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajuste para cubrir todo el fondo
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo semi-transparente para el contenido
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#E0E0E0', /*Color del fondo del card*/
    borderRadius: 10, /* Bordes redondeados */
    padding: 20, /* Espacio interno */
    width: '80%', /* Ancho del card */
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  formContainer: {
    alignItems: 'center', /*Alinear el formulario */
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  boton: {
    backgroundColor: "#FE0000", /*Color del botón*/
    paddingVertical: 15, /* Espaciado vertical dentro del botón */
    paddingHorizontal: 25, /* Espaciado horizontal dentro del botón */
    alignItems: 'center', /*Alineación del contenido del botón */
    marginTop: 20,
    borderRadius: 5,
  },
  botonText: {
    color: '#fff', /* Color del texto*/
    fontSize: 16, /* Tamaño del texto*/
    fontWeight: 'bold', /* Peso del texto*/
    letterSpacing: 1, /* Espaciado entre letras*/
    textTransform: 'uppercase', /* Transformación del texto a mayúsculas*/
  },
});