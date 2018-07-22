import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import CenaPrincipal from './src/CenaPrincipal.js';
import CenaClientes from './src/CenaClientes.js';
import CenaContato from './src/CenaContato.js'
import CenaEmpresa from './src/CenaEmpresa.js'
import CenaServico from './src/CenaServico.js'

const AppNavigator = createStackNavigator({
  home: CenaPrincipal,
  clientes: CenaClientes,
  contatos: CenaContato,
  empresa: CenaEmpresa,
  servico: CenaServico
  
})

export default class app5 extends Component {
  
  render() {
    return (
        <AppNavigator />
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
