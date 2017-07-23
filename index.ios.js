import { Navigation } from 'react-native-navigation';
import Home from './src/components/Home';
import CameraPlay from './src/components/CameraPlay';
import CameraRecord from './src/components/CameraRecord';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('CameraRecord', () => CameraRecord);
Navigation.registerComponent('CameraPlay', () => CameraPlay);

Navigation.startSingleScreenApp({
  screen:
    {
      screen: 'Home'
    },
  // drawer: { // optional, add this if you want a side menu drawer in your app
  //   left: { // optional, define if you want a drawer from the left
  //     screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
  //     passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  //   },
  //   right: { // optional, define if you want a drawer from the right
  //     screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
  //     passProps: {} // simple serializable object that will pass as props to all top screens (optional)
  //   },
  //   disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  // },
  // passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down'
});
