import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function CadastroUsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const salvarDados = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Aviso', 'Preencha todos os campos.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Email inválido', 'O email deve conter "@"');
      return;
    }

    const dadosUsuario = {
      nome,
      email,
      senha,
    };

    // Definindo o caminho correto para salvar o arquivo
    const caminhoArquivo =
      FileSystem.documentDirectory + 'dadosUsuario.json';

    try {
      // Salvando os dados do usuário no arquivo
      await FileSystem.writeAsStringAsync(
        caminhoArquivo,
        JSON.stringify(dadosUsuario)
      );
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <ImageBackground
      source={require('./background/cadastroUsuario2.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Cadastro de Usuário</Text>
        <TextInput
          placeholder="Nome"
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Cadastrar" onPress={salvarDados} />
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
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
