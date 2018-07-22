import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraNavegacao extends Component{
    render(){
        return(
            <View style={this.props.styleBarraNavegacao}>
                <Text style={textoStyle}>ATM - Consultoria</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    textoStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

const {barraNavegacaoStyle, textoStyle} = style