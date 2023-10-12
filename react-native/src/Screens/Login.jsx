import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import { ScreenSize } from "../constants/ScreenSize";
import GnoxImage from '../assets/images/gnoxOk/gnox-ok-team.png'

const LoginScreen = () => {

  React.useEffect(() => {
    console.log({
      asdf: Platform.OS
    })
  }, [])
  return (
    <View style={styles.container}>
      <View>
          <Image
            source={GnoxImage}
            style={styles.imageGnox}
          />
        <Text style={styles.titleText}>Hello React Native Web</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.arrowIcon}
          onPress={() => console.log('asdf')}>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#368B36',
    height: ScreenSize.height,
    width: ScreenSize.width,
  },
  topLoopLineContainer: {flexDirection: 'row'},
  topLoopLineContainerItem: {
    width: '50%',
  },
  topLoopLineContainerImageLeft: {marginTop: 30},
  imageGnox: {
    width: '100%',
    backgroundColor: '#368B36',
    height: ScreenSize.height - (ScreenSize.height * 0.6)
  },
  topLoopLineContainerImageRight: {alignSelf: 'flex-end'},
  titleText: {
    paddingTop: 35,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
  },
  arrowIcon: {
    bottom: 100,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default LoginScreen