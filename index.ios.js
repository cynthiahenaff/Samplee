/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImagePickerIOS,
  StatusBar,
  ActionSheetIOS
} from 'react-native';

import Sound from 'react-native-sound';
import ModalPicker from 'react-native-modal-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Camera from 'react-native-camera';

export default class ProjectApp1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image0: null,
      image1: null,
      image2: null,
      image3: null
    };
    this.chooseImageFromGallery = this.chooseImageFromGallery.bind(this);
    this.chooseImageFromCamera = this.chooseImageFromCamera.bind(this);
  }

  chooseImageFromGallery(imageIndex) {
    ImagePickerIOS.openSelectDialog(
      {},
      // Callback if it's ok
      (imageUri) => {
        this.setState({ ['image' + imageIndex]: imageUri });
      },
      // Callback if there is an error
      (error) => {
        console.log(error)
      }
    );
  }

  chooseImageFromCamera(imageIndex) {
    ImagePickerIOS.openCameraDialog(
      {},
      imageUri => {
        this.setState({ ['image' + imageIndex] :imageUri});
      },
      error => console.log(error)
    );
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

  onLongPressImage(imageIndex) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Change photo',
          'Change music',
          'Cancel',
        ],
        cancelButtonIndex: 2
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          this.changeImage(imageIndex)
        }
        else if (buttonIndex === 1) {
          console.log('Adrien veut changer de musique')
        }
      }
    )
  }

  changeImage(imageIndex) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'From Camera',
          'From Library',
          'Cancel',
        ],
        cancelButtonIndex: 2
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          this.chooseImageFromCamera(imageIndex)
        }
        else if (buttonIndex === 1) {
          this.chooseImageFromGallery(imageIndex)
        }
      }
    )
  }


  renderImage(index) {
    let content
    if (this.state['image' + index]) {
      content = (<Image style={styles.backGroundImage} source={{uri: this.state['image' + index]}} />)
    }
    else {
      content = (<Icon
        name="plus-square-o"
        size={40}
        color="white"
        style={{ margin: 10, position: 'absolute' }}
      />)
    }

    return (
      <TouchableOpacity
        delayLongPress={1000}
        onLongPress={this.onLongPressImage.bind(this, index)}
        style={{ flex: 1 }}
      >
        {content}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#FFB6C1'}}>
            {this.renderImage(0)}
          </View>

          <View style={{flex: 1, backgroundColor: '#85C1E9'}}>
            {this.renderImage(1)}
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#45B39D'}}>
            {this.renderImage(2)}
          </View>
          <View style={{ flex: 1, backgroundColor: '#E67E22'}}>
            {this.renderImage(3)}
          </View>
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
    backgroundColor: 'grey'
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
