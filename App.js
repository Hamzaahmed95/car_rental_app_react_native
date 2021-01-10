import React from "react";
import MainApp from "./src/Main";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <MainApp />
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
}
