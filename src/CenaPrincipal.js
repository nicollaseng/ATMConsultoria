import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

const logo = require('../img/logo.png')
const menu_cliente = require('../img/menu_cliente.png')
const menu_contato = require('../img/menu_contato.png')
const menu_empresa = require('../img/menu_empresa.png')
const menu_servico = require('../img/menu_servico.png')

export default class CenaPrincipal extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  render() {
    return (
      <View>
      <StatusBar hidden />
      <View style={logoStyle}>
        <Image source={logo} />
      </View>
      <View style={itemsStyleOne}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('clientes')}>
          <Image source={menu_cliente}/>
        </TouchableOpacity >
        <TouchableOpacity>
          <Image source={menu_contato} />
        </TouchableOpacity>
      </View>
      {/* <View style={itemsStyleTwo}>
        <Image source={menu_empresa} />
        <Image source={menu_servico} />
      </View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
    logoStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 0.5,
        marginVertical: 80
    },
    itemsStyleOne: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 100
    },
    itemsStyleTwo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
    },
    barraNavegacaoStyle: {
        backgroundColor: '#f0f0f5',
        padding: 30
    }
})

const {logoStyle, itemsStyleOne, itemsStyleTwo ,barraNavegacaoStyle}  = style