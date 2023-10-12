
import React, { useEffect } from "react";
import TestType from "./TestType";

interface AppTypes {
  num: string;
}

export const App = ({num}: AppTypes) => {
  const [postMessage, setPostMessage] = React.useState<any | null>()
  useEffect(() => {
    const postMessageHandler = (ev: any) => {
      console.log({
        ev: ev
      })

      setPostMessage(ev.data)
    }
    window.addEventListener('message', postMessageHandler)

    return () => window.removeEventListener('message',postMessageHandler)
  }, [])
  return (
    <div>
      <TestType />
      <div>{JSON.stringify(postMessage)}</div>
      <h1>Hello Number: {num}</h1>
    </div>
  )
};