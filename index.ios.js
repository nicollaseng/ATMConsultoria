import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import BarraNavegacao from './src/BarraNavegacao.js'
import CenaPrincipal from './src/CenaPrincipal.js';
import CenaClientes from './src/CenaClientes.js';

const AppNavigator = createStackNavigator({
  home: CenaPrincipal,
  clientes: CenaClientes,
  
})

export default class app5 extends Component {
  
  render() {
    return (
      <View>
        <AppNavigator />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);

const style = StyleSheet.create({
  barraNavegacaoStyle: {
      backgroundColor: '#f0f0f5',
      padding: 30
  }
})
