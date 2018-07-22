import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

const detalhe_empresa = require('../img/detalhe_empresa.png')
const btn_voltar = require('../img/btn_voltar.png')

export default class CenaClientes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BarraNavegacao styleBarraNavegacao={barraNavegacaoStyle}/>
        <TouchableOpacity style={botaoVoltar} 
                          onPress={() => this.props.navigation.goBack()}> 
          <Image source={btn_voltar}/>
        </TouchableOpacity>
        <View style={logoCliente}>
          <Image source={detalhe_empresa} />
          <Text style={textoCliente}>Empresa</Text>
        </View>
        <Text style={textoEmpresa}>Lorem ipsum colen run in ospo it edem idem lorem ipsi colo </Text>
        </View>
    )
  }
}

const style = StyleSheet.create({
  barraNavegacaoStyle: {
    backgroundColor: '#ec7148',
    padding: 30
},
  logoCliente: {
    marginTop: 60,
    marginLeft: -100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  textoCliente: {
    fontSize: 40,
    marginLeft: -200,
    color: '#ec7148',
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
    marginLeft: 10,
    marginTop: -65
  },
  textoEmpresa: {
      marginLeft: 5 
  }
})

const {barraNavegacaoStyle, logoCliente,
       textoCliente, topicsIcon, textIcons,
       botaoVoltar, textoEmpresa}  = style