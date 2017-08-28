import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import Rncamera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

class CameraRecord extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      cameraType: Rncamera.constants.Type.back,
      torchMode: Rncamera.constants.TorchMode.off}
  }

  captureStart() {
    const options = {};
    this.camera.capture({metadata: options, totalSeconds: 10, path: true})
      .then((data) => {
        this.props.navigator.push({
          screen: 'CameraPlay', // unique ID registered with Navigation.registerScreen
          passProps: { videoPath: data.path, imageIndex: this.props.imageIndex }, // Object that will be passed as props to the pushed screen (optional)
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
          // backButtonTitle: undefined, // override the back button title (optional)
          // backButtonHidden: false, // hide the back button altogether (optional)
          // navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
          // navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
        });

        // { size: 5732169,
        //   path: '/private/var/mobile/Containers/Data/Application/08556194-E2B0-4B4C-9112-BDB81095A151/tmp/66917072-FF2F-4469-A764-7CA26EE8566B-3556-00000409690394D8.mov',
        //   width: 1080,
        //   height: 1920,
        //   duration: 2.6683332920074463 }
      })
      .catch(err => console.error(err));
  }

  captureStop() {
    this.camera.stopCapture();
  }

  goToHome() {
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });
  }

  switchCamera() {
    let newType;
    const { back, front } = Rncamera.constants.Type;

    if (this.state.cameraType === back) {
      newType = front;
    } else if (this.state.cameraType === front) {
      newType = back;
    }
    this.setState({ cameraType: newType });
  }

  switchTorch = () => {
      let newTorchMode;
      const { on, off } = Rncamera.constants.TorchMode;

      if (this.state.torchMode === on) {
        newTorchMode = off;
      }
      else if (this.state.torchMode === off) {
        newTorchMode = on;
      }

      this.setState({ torchMode: newTorchMode });
    }


  render() {
    let torch;
    const {off, on } = Rncamera.constants.TorchMode;
    console.log({ off, on })
    console.log(this.state.torchMode)
    if (this.state.torchMode === off) {
      torch = (
        <View>
          <Icon
            name="circle-o"
            style={{ position: 'absolute', top: 10, right: 40 }}
            size={32}
            color="white"
          />
          <Icon
            name="bolt"
            style={{ position: 'absolute', top: 14, right: 48 }}
            size={22}
            color="white"
            position="absolute"
          />
        </View>
      )
    }
    else if (this.state.torchMode === on) {
      torch = (
        <View>
          <Icon
            name="circle"
            style={{ position: 'absolute', top: 10, right: 40 }}
            size={32}
            color="white"
          />
          <Icon
            name="bolt"
            style={{ position: 'absolute', top: 14, right: 48 }}
            size={22}
            color="black"
            position="absolute"
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Rncamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style= {styles.preview}
          aspect={Rncamera.constants.Aspect.fill}
          captureMode={Rncamera.constants.CaptureMode.video}
          captureAudio
          captureTarget={Rncamera.constants.CaptureTarget.temp}
          orientation="portrait"
          type={this.state.cameraType}
          torchMode={this.state.torchMode}
          mirrorImage={false}
        >
          <TouchableOpacity style={styles.button}
            onPressIn={this.captureStart.bind(this)}
            onPressOut={this.captureStop.bind(this)}
          />
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'transparent' }}
            onPress={this.goToHome.bind(this)}
          >
            <Icon
              name="close"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'transparent' }}
            onPress={this.switchCamera.bind(this)}
          >
            <Icon
              name="camera"
              style={{ position: 'absolute', top: 10, right: 10 }}
              size={30}
              color="white"
            />
            <Icon
              name="circle"
              style={{ position: 'absolute', top: 17, right: 18 }}
              size={19}
              color="white"
              position="absolute"
            />
            <Icon
              name="refresh"
              style={{ position: 'absolute', top: 17, right: 18 }}
              size={19}
              color="black"
              position="absolute"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 30, backgroundColor: 'transparent' }}
            onPress={this.switchTorch.bind(this)}
          >
            {torch}
          </TouchableOpacity>
        </Rncamera>
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
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    marginBottom: 20
  },
});


export default CameraRecord;
