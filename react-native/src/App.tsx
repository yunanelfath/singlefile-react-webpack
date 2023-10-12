
import React, { useEffect } from "react";
// import TestType from "./TestType";
import {View, Text} from 'react-native';
import LoginScreen from "./Screens/Login";

interface AppTypes {
  num: string;
}

export const App = ({num}: AppTypes) => {
  const [postMessage, setPostMessage] = React.useState<any | null>()
  useEffect(() => {
    const postMessageHandler = (ev: any) => {
      console.log({
        num,
        data: ev.data
      })
      setPostMessage(ev.data)
    }
    window.addEventListener('message', postMessageHandler)

    return () => window.removeEventListener('message',postMessageHandler)
  }, [])
  return (
    <View>
      <LoginScreen />
      <Text>Hello world from react native asdfasdf</Text>
    </View>
  )
};