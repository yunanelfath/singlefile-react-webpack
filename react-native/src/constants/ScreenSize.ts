import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ScreenSize = {
  width: windowWidth,
  height: windowHeight,
  smallScreenHeight: 600,
};
