/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ProjectApp1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Image
            source={require('./img/gretchen.jpg')}
            style={{flex: 1, width: null, height: null}}
            resizeMode="cover"
          />
          <Image
            source={require('./img/baguette.jpg')}
            style={{flex: 1, width: null, height: null}}
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Image
            source={require('./img/petitNain.jpg')}
            style={{flex: 1, width: null, height: null}}
          />
          <Image
            source={require('./img/helga.jpg')}
            style={{flex: 1, width: null, height: null}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ProjectApp1', () => ProjectApp1);
