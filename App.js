import React, { Component } from "react";
import MainApp from "./src/Main";
import Toast from "react-native-toast-message";

import { firebaseConfig } from "./src/utilities/Consants/apiKey";
import firebase from "firebase/app";

export default class App extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }
  render() {
    return (
      <>
        <MainApp />
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    );
  }
}
