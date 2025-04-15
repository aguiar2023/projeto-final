import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <ImageBackground
      source={require('./background/configurar.jpg')} // Caminho relativo correto
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.texto}>Tela de Configurações ⚙️</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
