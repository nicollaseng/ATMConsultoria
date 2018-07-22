import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import CenaPrincipal from './src/CenaPrincipal.js';
import CenaClientes from './src/CenaClientes.js';

const AppNavigator = createStackNavigator({
  home: CenaPrincipal,
  clientes: CenaClientes,
  
})

export default class app5 extends Component {
  
  render() {
    return (
        <AppNavigator/>
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
