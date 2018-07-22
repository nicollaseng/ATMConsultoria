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
      <BarraNavegacao style={barraNavegacaoStyle}/>
      <View style={logoStyle}>
        <Image source={logo} />
      </View>
      <View style={itemsStyleOne}>
        <Image source={menu_cliente} />
        <Image source={menu_contato} />
      </View>
      <View style={itemsStyleTwo}>
        <Image source={menu_empresa} />
        <Image source={menu_servico} />
      </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    logoStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 0.5,
        marginVertical: 50
    },
    itemsStyleOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.5,
        marginTop: 200
    },
    itemsStyleTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.5,
        marginTop: 150
    },
    barraNavegacaoStyle: {
        backgroundColor: '#f0f0f5',
        padding: 30
    }
})

const {logoStyle, itemsStyleOne, itemsStyleTwo ,barraNavegacaoStyle}  = style