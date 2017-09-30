import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import { connect } from 'react-redux';
import Tile from './Tile';
import Onboarding from './Onboarding';
import Dot from './Dot';
import DotContainer from './DotContainer';


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
      <Onboarding />
    );

    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#7ED321', borderBottomColor: 'white', borderBottomWidth: 1, borderRightColor: 'white', borderRightWidth: 1 }}>
            <Tile imageIndex={0} navigator={this.props.navigator} />
          </View>

          <View style={{flex: 1, backgroundColor: '#4A90E2', borderBottomColor: 'white', borderBottomWidth: 1, borderLeftColor: 'white', borderLeftWidth: 1}}>
            <Tile imageIndex={1} navigator={this.props.navigator} />
          </View>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1, backgroundColor: '#F5A623', borderTopColor: 'white', borderTopWidth: 1, borderRightColor: 'white', borderRightWidth: 1}}>
            <Tile imageIndex={2} navigator={this.props.navigator} />
          </View>
          <View style={{ flex: 1, backgroundColor: '#D0021B', borderTopColor: 'white', borderTopWidth: 1, borderLeftColor: 'white', borderLeftWidth: 1}}>
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
