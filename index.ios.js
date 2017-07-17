import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import CameraPlay from './components/CameraPlay';
import CameraRecord from './components/CameraRecord';


const App = StackNavigator({
  Home: { screen: Home },
  CameraPlay: { screen: CameraPlay },
  CameraRecord: { screen: CameraRecord }
});



AppRegistry.registerComponent('ProjectApp1', () => App);
