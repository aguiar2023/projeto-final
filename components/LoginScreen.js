import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system'; // certifique-se que está no topo
import {
  View, Text, TextInput, StyleSheet, Alert,
  TouchableOpacity, ImageBackground
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  

const fazerLogin = async () => {
  const caminhoArquivo = FileSystem.documentDirectory + 'dadosUsuario.json';
  try {
    // Initialize file if it doesn't exist
    const info = await FileSystem.getInfoAsync(caminhoArquivo);
    if (!info.exists) {
      await FileSystem.writeAsStringAsync(caminhoArquivo, JSON.stringify({ nome: '', email: '', senha: '' }));
    }

    const conteudo = await FileSystem.readAsStringAsync(caminhoArquivo);
    const dadosUsuario = JSON.parse(conteudo);

    if (usuario === dadosUsuario.nome && senha === dadosUsuario.senha) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
    }
  } catch (error) {
    if (error.message.includes('Unexpected end of input')) {
      Alert.alert('Erro', 'Dados do usuário estão incompletos ou inválidos.');
    } else {
      console.error('Erro ao ler arquivo:', error);
      Alert.alert('Erro', 'Não foi possível acessar os dados do usuário.');
    }
  }
};


  return (
    <ImageBackground
      source={require('./background/fundo3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder="Usuário"
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        



        <TouchableOpacity onPress={fazerLogin} style={styles.botao}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CadastroUsuario')}>
          <Text style={styles.linkCadastro}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  botaoCadastro: {
  backgroundColor: '#28a745', // Verde para destacar
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
},


  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkCadastro: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 15,
  },
});
