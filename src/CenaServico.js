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
        const menu_servico = require('../img/menu_servico.png')
        return(
            <View style={{backgroundColor: 'white', flex:1}}>
                <BarraNavegacao styleBarraNavegacao={barraNavegacaoStyle} />
                <TouchableOpacity style={botaoVoltar} 
                                    onPress={() => this.props.navigation.goBack() }>
                    <Image source={botao_back}/>
                </TouchableOpacity>
                <View style={mensagemEstilo}>
                    <Image source={menu_servico}/>
                    <Text style={contatoEstilo}>Serviços</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={telefonesEstilo}>- Consultoria</Text>
                    <Text style={telefonesEstilo}>- Processos</Text>
                    <Text style={telefonesEstilo}>- Acompanhamento de Projeto</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    barraNavegacaoStyle: {
        backgroundColor: '#19d1c8',
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
        color: '#19d1c8',
        fontWeight: 'bold',
        marginLeft: 5
        
    },
    telefonesEstilo: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 15
        
    },
    
})

const {barraNavegacaoStyle, botaoVoltar,
        contatoEstilo, mensagemEstilo, telefonesEstilo} = style