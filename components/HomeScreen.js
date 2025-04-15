import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SocialButtons from './SocialButtons';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./background/fundo3.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>
          Bem-vindo{'\n'} ao{'\n'}EconomizApp 🛒
        </Text>

        <HoverButton label="📦 Cadastro de Produtos" onPress={() => navigation.navigate('CadastroProduto')} />
<HoverButton label="📍 Localização dos Supermercados" onPress={() => navigation.navigate('MapaSupermercado')} />
<HoverButton label="🔍 Filtrar Produtos" onPress={() => navigation.navigate('FiltroProduto')} />
<HoverButton label="📝 Lista de Compras" onPress={() => navigation.navigate('ListaCompras')} />

      </View>

      {/* Botões Home e Configuração no canto inferior esquerdo */}
      <View style={styles.bottomLeftContainer}>
        <View style={styles.navButtons}>
          

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Configuracoes')}
          >
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botões Sociais no canto inferior direito */}
      <View style={styles.bottomRightContainer}>
        <SocialButtons />
      </View>
    </ImageBackground>
  );
}

function HoverButton({ label, onPress }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[styles.transparentButton, hovered && styles.hoveredButton]}
    >
      <Text style={[styles.buttonText, hovered && styles.hoveredButtonText]}>{label}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  transparentButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    width: 250,
    alignItems: 'center',
  },
  hoveredButton: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hoveredButtonText: {
    color: '#007AFF',
  },
  bottomLeftContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
  },
  bottomRightContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  navButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 8,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 3,
  },
});
