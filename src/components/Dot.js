import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

class Dot extends Component {

  render() {
    let style = [ styles.littleDot ];

    if (this.props.activated) {
      style.push(styles.littleDotActive)
    }

    return (
      <View style={style} />
    );
  }
}

const styles = StyleSheet.create({
  littleDot: {
    backgroundColor: 'rgba(0,0,0,0.20)',
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    margin: 5
  },
  littleDotActive: {
    backgroundColor: 'white'
  }
});

export default Dot;
