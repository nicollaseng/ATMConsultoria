import React, { Component } from 'react';
import BarraNavegacao from './src/BarraNavegacao.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class app5 extends Component {
  render() {
    return (
      <View>
      <StatusBar hidden />
      <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
