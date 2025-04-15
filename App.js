import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ConfiguracoesScreen from './components/ConfiguracoesScreen';
import CadastroProduto from './components/CadastroProdutoScreen';
import MapaSupermercado from './components/MapaSupermercadoScreen';
import FiltroProduto from './components/FiltroProdutoScreen';
import ListaCompras from './components/ListaComprasScreen';
import CadastroUsuarioScreen from './components/CadastroUsuarioScreen';








const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="MapaSupermercado" component={MapaSupermercado} />
        <Stack.Screen name="FiltroProduto" component={FiltroProduto} />
        <Stack.Screen name="ListaCompras" component={ListaCompras} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
       
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
