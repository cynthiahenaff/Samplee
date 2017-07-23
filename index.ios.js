import { Navigation } from 'react-native-navigation';
import Home from './src/components/Home';
import CameraPlay from './src/components/CameraPlay';
import CameraRecord from './src/components/CameraRecord';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import app from './src/redux/reducers/app';

const store = createStore(combineReducers({ app }));

Navigation.registerComponent('Home', () => Home, store, Provider);
Navigation.registerComponent('CameraRecord', () => CameraRecord, store, Provider);
Navigation.registerComponent('CameraPlay', () => CameraPlay, store, Provider);

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
