import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import CenaClientes from './src/CenaClientes.js';

export default class app5 extends Component {
  render() {
    return (
      <View>
        <CenaClientes />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
