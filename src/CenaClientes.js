import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';

const cliente1 = require('../img/cliente1.png')
const cliente2 = require('../img/cliente2.png')
const detalhe_cliente = require('../img/detalhe_cliente.png')
const btn_voltar = require('../img/btn_voltar.png')

export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <BarraNavegacao styleBarraNavegacao={barraNavegacaoStyle}/>
        <View style={botaoVoltar}>
          <Image source={btn_voltar}/>
        </View>
        <View style={logoCliente}>
          <Image source={detalhe_cliente} />
          <Text style={textoCliente}>Clientes</Text>
        </View>
          <Image source={cliente1} style={topicsIcon} />
          <Text style={textIcons}>Lorem ipsum colare somum advance ip sumum lori</Text>
          <Image source={cliente2} style={topicsIcon} />
          <Text style={textIcons}>Lorem ipsum colare somum advance ip sumum lori</Text>
        </View>
    )
  }
}

const style = StyleSheet.create({
  barraNavegacaoStyle: {
    backgroundColor: '#b9c941',
    padding: 30
},
  logoCliente: {
    marginTop: 45,
    marginLeft: -100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  textoCliente: {
    fontSize: 40,
    marginLeft: -200,
    color: '#b9c941',
    fontWeight: 'bold'
  },
  topicsIcon: {
    marginLeft: 20,
    marginVertical: 10
  },
  textIcons: {
    marginLeft: 25,
    marginTop: 5
  },
  botaoVoltar: {
    justifyContent: 'flex-end',
    flex: 1,
    marginLeft: 10,
    marginTop: -30
  }
})

const {barraNavegacaoStyle, logoCliente,
       textoCliente, topicsIcon, textIcons, botaoVoltar}  = style