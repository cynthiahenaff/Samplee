import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import Tile from './Tile';

class Home extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props);
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
            <Tile imageIndex={0} navigator={this.props.navigator} />
          </View>

          <View style={{flex: 1, backgroundColor: '#db7093'}}>
            <Tile imageIndex={1} navigator={this.props.navigator} />
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#00897b'}}>
            <Tile imageIndex={2} navigator={this.props.navigator} />
          </View>
          <View style={{ flex: 1, backgroundColor: '#fdcc67'}}>
            <Tile imageIndex={3} navigator={this.props.navigator} />
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
