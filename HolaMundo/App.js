import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Grupo A',
            data: [
              { key: '1', name: 'Lilian' },
              { key: '2', name: 'Monse' },
              { key: '3', name: 'Alan' },
              { key: '4', name: 'Elias' },
            ]
          },
          { title: 'Grupo B',
            data: [
              { key: '5', name: 'Pablo' },
              { key: '6', name: 'Victor' },
              { key: '7', name: 'El profe' },
            ]
          },
          { title: 'Grupo C',
            data: [
              { key: '8', name: 'Fer' },
              { key: '9', name: 'Juan' },
              { key: '10', name: 'Dani' },
              { key: '11', name: 'Diego' },
            ]
          },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch', // 'stretch' está escrito incorrectamente en tu código
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10, // Agregué un padding izquierdo para mejorar la apariencia
  },
});