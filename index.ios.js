import React, { Component } from 'react';
import BarraNavegacao from './src/BarraNavegacao.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class app5 extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
