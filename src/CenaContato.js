import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import BarraNavegacao from './BarraNavegacao.js'

export default class CenaContatos extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
           header: null
        }
     }
    render(){
        const botao_back = require('../img/btn_voltar.png')
        const mensagem = require('../img/detalhe_contato.png')
        return(
            <View style={{backgroundColor: 'white', flex:1}}>
                <BarraNavegacao styleBarraNavegacao={barraNavegacaoStyle} />
                <TouchableOpacity style={botaoVoltar} 
                                    onPress={() => this.props.navigation.goBack() }>
                    <Image source={botao_back}/>
                </TouchableOpacity>
                <View style={mensagemEstilo}>
                    <Image source={mensagem}/>
                    <Text style={contatoEstilo}>Contatos</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={telefonesEstilo}>(011)0000-0000</Text>
                    <Text style={telefonesEstilo}>(011)0000-0000</Text>
                    <Text style={telefonesEstilo}>email: atm.consultoria@atm.com.br</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    barraNavegacaoStyle: {
        backgroundColor: '#61bd8c',
        padding: 30
    },
    botaoVoltar:{
        marginTop:-65,
        marginLeft: 9
    },
    mensagemEstilo:{
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    contatoEstilo: {
        fontSize: 30,
        color: '#61bd8c',
        fontWeight: 'bold',
        marginLeft: 5
        
    },
    telefonesEstilo: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 5,
        
    },
    
})

const {barraNavegacaoStyle, botaoVoltar,
        contatoEstilo, mensagemEstilo, telefonesEstilo} = style