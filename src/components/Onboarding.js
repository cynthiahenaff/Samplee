import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text
} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import DotContainer from './DotContainer';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const roundMargin = 70;
const roundDiameter = windowWidth - roundMargin * 2;


class Onboarding extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          style={{ height: '100%', backgroundColor: 'grey' }}
          pagingEnabled
        >

          {/* One */}
          <View style={styles.onboardingOne}>
            <View style={styles.round}>
              <SvgUri
                source={require('../img/cameraObjectif.svg')}
                width={roundDiameter * 80 / 100}
                height={roundDiameter * 80 / 100}
              />
            </View>
            <View>
              <Text style={styles.text}>
                Fait des vidéos
              </Text>
              <Text style={styles.text}>
                marrantes
              </Text><Text style={styles.text}>
                de tes amis
              </Text>
            </View>
          </View>


          {/* Two */}
          <View style={styles.onboardingTwo}>
            <View style={styles.round}>
              <SvgUri
                source={require('../img/playVideo.svg')}
                width={roundDiameter * 90 / 100}
                height={roundDiameter * 90 / 100}
                style={{ marginBottom: 20 }}
              />
            </View>
            <View>
              <Text style={styles.text}>
                Rejoue les
              </Text>
              <Text style={styles.text}>
                à volonté
              </Text>
            </View>
          </View>


          {/* Three */}
          <View style={styles.onboardingThree}>
            <View style={styles.round}>
              <SvgUri
                source={require('../img/smiley.svg')}
                width={roundDiameter * 80 / 100}
                height={roundDiameter * 80 / 100}
              />
            </View>
            <View>
              <Text style={styles.text}>
                Et amuse toi !
              </Text>
            </View>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 40}}>
              <View
                style={styles.button}
              >
                <Text
                  style={styles.buttonText}
                >
                  C'EST PARTI !
                </Text>

              </View>
            </View>
          </View>
        </ScrollView>

        <DotContainer
          count={3}
          indexActivated={1}
          style={{ position: 'absolute', width: windowWidth, justifyContent: 'center', bottom: 97 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  onboardingOne: {
    backgroundColor: '#F5A623',
    width: windowWidth,
  },
  onboardingTwo: {
    backgroundColor: '#7ED321',
    width: windowWidth,

  },
  onboardingThree: {
    backgroundColor: '#219CD3',
    width: windowWidth
  },
  round: {
    width: roundDiameter,
    height: roundDiameter,
    margin: roundMargin,
    borderRadius: roundDiameter / 2,
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Helvetica',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'white',
    width: windowWidth * 80 / 100,
    height: 42,
    borderRadius: 100
  },
  buttonText: {
    color: '#219CD3',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    lineHeight: 42
  }
});

export default Onboarding;
