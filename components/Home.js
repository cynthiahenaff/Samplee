import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  // ImagePickerIOS,
  StatusBar,
  ActionSheetIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  static navigationOptions = {
      header: null,
    };

  constructor(props) {
    super(props);
    this.state = {
      image0: null,
      image1: null,
      image2: null,
      image3: null
    };
  }


  onLongPressImage(imageIndex) {
    const { navigate } = this.props.navigation;
    navigate('CameraRecord', {});

    // ActionSheetIOS.showActionSheetWithOptions(
    //   {
    //     options: [
    //       'Change photo',
    //       'Change music',
    //       'Cancel',
    //     ],
    //     cancelButtonIndex: 2
    //   },
    //   (buttonIndex) => {
    //     if (buttonIndex === 0) {
    //       this.changeImage(imageIndex)
    //     }
    //     else if (buttonIndex === 1) {
    //       console.log('Adrien veut changer de musique')
    //     }
    //   }
    // )
  }

  renderImage(index) {
    let content
    if (this.state['image' + index]) {
      content = (<Image style={styles.backgroundImage} source={{uri: this.state['image' + index]}} />)
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
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'

  }
})
