import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import Onboarding from './Onboarding';
import Home from './Home';


class App extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props);
    this.state = {
      onboardingValidated: false
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('onboardingValidated', (err, result) => {
      if (result === 'true') {
        this.setState({ onboardingValidated : true});
      }
      else {
        this.setState({ onboardingValidated : false });
      }
    });
  }

  onboardingValidated() {
    AsyncStorage.setItem('onboardingValidated', 'true');
    this.setState({ onboardingValidated: true });
  }

  render() {
    console.log(this.state.onboardingValidated);

    if (this.state.onboardingValidated === false) {
      return (
        <Onboarding onValidated={this.onboardingValidated.bind(this)} />
      );
    }
    else if (this.state.onboardingValidated === true) {
      return (
        <Home />
      );
    }
  }
}



export default connect(
  state => ({ app: state.app })
)(App);
