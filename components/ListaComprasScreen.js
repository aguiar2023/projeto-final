// screens/ListaComprasScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function ListaComprasScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./background/cadastro.jpg')} // Caminho para sua imagem de fundo
      style={styles.background}
      resizeMode="cover" // Garantir que a imagem cubra toda a tela
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Lista de Compras</Text>
        
        {/* Adicione seu conteúdo específico da tela de Lista de Compras */}
        <Button
          title="Adicionar Item"
          onPress={() => {/* Função para adicionar item à lista */}}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo semi-transparente para legibilidade
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
