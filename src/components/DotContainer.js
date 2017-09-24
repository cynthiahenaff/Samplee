import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Dot from './Dot';

class DotContainer extends Component {

  renderDots() {
    // for (/* init */; /* condition */; /* increment */) {
    //   // Ton code X fois
    // }
    let dots = [];
    for (let i = 0; i < this.props.count; i = i + 1) {
      if (this.props.indexActivated === i) {
        dots.push(<Dot activated />)
      }
      else {
        dots.push(<Dot/>)
      }
    }
    return dots
  }

  render() {
    return (
      <View style={[ this.props.style, { flexDirection: 'row'} ]}>
        {this.renderDots()}
      </View>
    );
  }
}

export default DotContainer;
