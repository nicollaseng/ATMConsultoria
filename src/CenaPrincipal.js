import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  StatusBar,
  Image
} from 'react-native';

const logo = require('../img/logo.png')
const menu_cliente = require('../img/menu_cliente.png')
const menu_contato = require('../img/menu_contato.png')
const menu_empresa = require('../img/menu_empresa.png')
const menu_servico = require('../img/menu_servico.png')

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
      <StatusBar hidden />
      <BarraNavegacao />
      <Image source={logo} />
      <Image source={menu_cliente} />
      <Image source={menu_contato} />
      <Image source={menu_empresa} />
      <Image source={menu_servico} />
      </View>
    );
  }
}
