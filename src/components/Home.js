import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

class Home extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props);
    this.state = { paused: true };
  }

  onLongPressImage(imageIndex) {
    this.props.navigator.push({
      screen: 'CameraRecord',
      passProps: { imageIndex: imageIndex },
      animated: true,
      animationType: 'slide-horizontal',
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    })
  }

  onPressImage(imageIndex) {
    if (this.props.app.videos[imageIndex] === null) {
      return;
    }
    this.player.seek(0);
    this.setState({ paused: false });
  }

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


  renderImage(imageIndex) {
    let content
    if (this.props.app.videos[imageIndex]) {
      content = (
        <Video
          style={styles.container}
          source={{uri: this.props.app.videos[imageIndex]}}
          ref={(ref) => {
           this.player = ref
          }}
          resizeMode="cover"
          paused={this.state.paused}
        />
      )
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
        onLongPress={this.onLongPressImage.bind(this, imageIndex)}
        style={{ flex: 1 }}
        onPress={this.onPressImage.bind(this, imageIndex)}
      >
        {content}
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props.app);

    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#e85c5c'}}>
            {this.renderImage(0)}
          </View>

          <View style={{flex: 1, backgroundColor: '#db7093'}}>
            {this.renderImage(1)}
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#00897b'}}>
            {this.renderImage(2)}
          </View>
          <View style={{ flex: 1, backgroundColor: '#fdcc67'}}>
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

export default connect(
  state => ({ app: state.app })
)(Home);
