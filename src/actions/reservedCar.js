import firebase from "firebase";
import { RESERVE_CAR } from "./types";

import Toast from "react-native-toast-message";

export const reserve_car = (registeredCar, props) => dispatch => {
  let registeredCarRef = firebase.database().ref("registeredCar");
  let newCarRegisteredRef = registeredCarRef.push();
  newCarRegisteredRef
    .set(registeredCar)
    .then(() => {
      dispatch({
        type: RESERVE_CAR,
        payload: true
      });
      setTimeout(() => {
        props.navigation.goBack();
        Toast.show({
          text1: "Congrats",
          text2: "Car has been registered 👋"
        });
      }, 2000);
    })
    .catch(err =>
      dispatch({
        type: RESERVE_CAR,
        payload: false
      })
    );
};
