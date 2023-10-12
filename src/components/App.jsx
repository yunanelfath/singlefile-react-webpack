
import React from "react";
import TestType from "./TestType";

export const App = ({num}) => {
  return (
    <div>
      <TestType />
      <h1>Hello Number: {num}</h1>
    </div>
  )
};