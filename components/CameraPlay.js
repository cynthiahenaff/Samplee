import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CameraPlay extends Component {
  static navigationOptions = {
      header: null,
    };

  constructor(props) {
    super(props);
    this.state = {
      videoPath: null
    };
  }

  goToCameraRecord() {
    const { navigate } = this.props.navigation;
    navigate('CameraRecord', {});
  }

  goToHome() {
    const { navigate } = this.props.navigation;
    navigate('Home', {});
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Video
          source={{uri: params.videoPath}}   // Can be a URL or a local file.
          ref={(ref) => {
           this.player = ref
          }}                             // Store reference
          resizeMode="cover"             // Fill the whole screen at aspect ratio.
          repeat                         // Repeat forever.
          style={styles.container}
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'transparent' }}
          onPress={this.goToHome.bind(this)}
        >
          <Icon
            name="times"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 10, left: 10, backgroundColor: 'transparent' }}
          onPress={this.goToCameraRecord.bind(this)}
        >
          <Icon
            name="repeat"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'transparent' }}>
          <Icon
            name="check-circle-o"
            size={60}
            color="#D30547"
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
