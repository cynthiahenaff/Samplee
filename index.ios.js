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
  Image,
  TouchableOpacity,
} from 'react-native';

import Sound from 'react-native-sound';

export default class ProjectApp1 extends Component {
  buttonGretchen() {
    // alert('Grosse chieuse')
    Sound.setCategory('Playback')
    const soundGretchen = new Sound('miaulementGretchen.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert(JSON.stringify(error));
        return;
      }
      soundGretchen.play()
    })
  }

    buttonHelga() {
     Sound.setCategory('Playback')
     const soundHelga = new Sound('miaouHelga.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert(JSON.stringify(error));
        return;
      }
      soundHelga.play()
      })
    }
    buttonMagicWand() {
      Sound.setCategory('Playback')
      const soundMagicWand = new Sound('fairyBell.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          alert(JSON.stringify(error));
          return;
        }
        soundMagicWand.play()
      })
    }

    buttonAdrien() {
      Sound.setCategory('Playback')
      const soundAdrien = new Sound('raspAdrien.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          alert(JSON.stringify(error));
          return;
        }
        soundAdrien.play()
      })
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={{
              flex: 1,
              flexDirection: 'row'
              }}
            >
              <TouchableOpacity onPress={this.buttonGretchen} style={{flex: 1}}>
                <Image
                  source={require('./img/gretchen.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.buttonMagicWand} style={{flex: 1}}>
                <Image
                  source={require('./img/baguette.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row'
              }}
            >
              <TouchableOpacity onPress={this.buttonAdrien} style={{flex: 1}}>
                <Image
                  source={require('./img/petitNain.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.buttonHelga} style={{flex: 1}}>
                <Image
                  source={require('./img/helga.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
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
