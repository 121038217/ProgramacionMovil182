import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, FlatList, Alert, DrawerLayoutAndroid } from 'react-native';
import React, { useState } from 'react';
import fondoImagen from './assets/imagen_fondo/imagen1.jpg';

export default function App() {

  const [Lista, setListapeli] = useState(''); 
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const data = [
    { key: '1', name: 'Intensamente' },
    { key: '2', name: 'Intensamente 2' },
    { key: '3', name: 'Río' },
    { key: '4', name: 'El extraño mundo de Jack' },
    { key: '5', name: 'Los increíbles' },
  ];

  const mensajes = () => {
    if (Lista.trim() === '') {
      Alert.alert('Lista de Peliculas');
      return;
    };

    const pelifiltro = data.filter(item => item.name.toLowerCase().includes(Lista.toLowerCase()));
    if (pelifiltro.length === 0) {
      Alert.alert('Sin resultados', 'No hay coincidencias');
    }
    setBusquedaRealizada(true);

  }

  return (
    <View style={styles.container}>

      <ImageBackground source={fondoImagen} style={styles.background}>

      <Text style={styles.text}> Buscador de Peliculas </Text>

      <TextInput placeholder='Título o parte...' style={styles.input} onChangeText={(text) => setListapeli(text)} value={Lista}/>

      <Button title='BUSCAR' onPress={mensajes} style={styles.Boton}></Button>
   
      {busquedaRealizada && (
          <FlatList
            data={data.filter(item => item.name.toLowerCase().includes(Lista.toLowerCase()))}
            renderItem={({ item }) => <Text style={styles.item}> {item.name} </Text>}
          />
      )}

      <StatusBar style="auto" />

      </ImageBackground>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center', 
  },
  text:{
    paddingTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Boton:{
    backgroundColor: '#2E86C1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alighItems: 'center',
  },
  input:{
    width: '70%',
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginRight: 10,
    marginHorizontal: '15%',
    paddingHorizontal: 10,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  item:{
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1,
  },

});
