import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../redux/actions/app';

class CameraPlay extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  goToCameraRecord() {
    this.props.navigator.pop({
    animated: true,
    animationType: 'fade',
    });
  }

  goToHome() {
    this.props.navigator.popToRoot({
      animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
    });
  }

  checkVideo() {
    console.log(this.props.videoPath);
    this.props.appActions.videoSet0(this.props.videoPath);
    this.goToHome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{uri: this.props.videoPath}}   // Can be a URL or a local file.
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
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'transparent' }}
          onPress={this.checkVideo.bind(this)}
        >
          <Icon
            name="check-circle-o"
            size={80}
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
});

export default connect(
  state => ({ app: state.app }),
  dispatch => ({ appActions: bindActionCreators(appActions, dispatch) })
)(CameraPlay);
