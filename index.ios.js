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
  CameraRoll,
  ImagePickerIOS,
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native';

import Sound from 'react-native-sound';
import ModalPicker from 'react-native-modal-picker';
// import Camera from 'react-native-camera';


export default class ProjectApp1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  soundPlay(soundName) {
    Sound.setCategory('Playback')
    const sound = new Sound(soundName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert(JSON.stringify(error));
        return;
      }
      sound.play()
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
              <View style={{flex: 1}}>

              <TouchableOpacity>
                <Image
                  source={require('./img/logoPhoto.png')}
                  style={{width: 50, height:50}}
                />
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity onPress={this.soundPlay.bind(this, 'fairyBell.mp3')} style={{flex: 1}}>
                <Image
                  source={require('./img/baguette.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              </View>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row'
              }}
            >
              <TouchableOpacity onPress={this.soundPlay.bind(this, 'raspAdrien.mp3')} style={{flex: 1}}>
                <Image
                  source={require('./img/petitNain.jpg')}
                  style={{flex: 1, width: null, height: null}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.soundPlay.bind(this, 'miaouHelga.mp3')} style={{flex: 1}}>
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
    backgroundColor: 'white'
  },

})

AppRegistry.registerComponent('ProjectApp1', () => ProjectApp1);
