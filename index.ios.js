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
  TextInput,
  StatusBar
} from 'react-native';

import Sound from 'react-native-sound';
import ModalPicker from 'react-native-modal-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Camera from 'react-native-camera';


export default class ProjectApp1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.chooseImageFromGallery = this.chooseImageFromGallery.bind(this);
    this.chooseImageFromGallery = this.chooseImageFromCamera.bind(this);
  }

  chooseImageFromGallery() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image:imageUri});
    }, error => console.error(error));
  }

  chooseImageFromCamera() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, error => console.error(error));
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
            <StatusBar hidden={'true'} />

            <View style={{
              flex: 1,
              flexDirection: 'row'
              }}
            >
              <View style={{ flex: 1 }}>
                {this.state.image?
                  <Image style={styles.backGroundImage} source={{uri: this.state.image}}>
                  </Image>:null}
                  <View style={{ position: 'absolute'}}>
                      <TouchableOpacity onPress={this.chooseImageFromCamera}>
                        <Icon
                          name="camera"
                          size={30}
                          color="black"
                          style={{ margin: 10 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.chooseImageFromGallery}>
                        <Icon
                          name="picture-o"
                          size={30}
                          color="black"
                          style={{ margin: 10 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name="volume-up"
                          size={30}
                          color="black"
                          style={{ margin: 15 }}
                        />
                      </TouchableOpacity>
                  </View>

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
    backgroundColor: 'transparent'
  },
  backGroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'

  }

})

AppRegistry.registerComponent('ProjectApp1', () => ProjectApp1);
