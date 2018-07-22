import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import CenaPrincipal from './src/CenaPrincipal.js';

export default class app5 extends Component {
  render() {
    return (
      <View>
        <CenaPrincipal />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
