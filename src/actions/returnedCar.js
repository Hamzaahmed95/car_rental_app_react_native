import firebase from "firebase";
import { RETURN_CAR } from "./types";

import Toast from "react-native-toast-message";

export const returned_car = (pastBooking, props) => dispatch => {
  let pastBookingRef = firebase.database().ref("pastBooking");
  let newPastBookingRef = pastBookingRef.push();
  newPastBookingRef
    .set(pastBooking)
    .then(() => {
      dispatch({
        type: RETURN_CAR,
        payload: true
      });
      setTimeout(() => {
        props.navigation.goBack();
        Toast.show({
          text1: "Congrats",
          text2: "Car has been safely returned 👋"
        });
      }, 2000);
    })
    .catch(err =>
      dispatch({
        type: RETURN_CAR,
        payload: false
      })
    );
};

export const getMyPastBooking = () => dispatch => {
  firebase
    .database()
    .ref("pastBooking")
    .orderByChild("name")
    .on("value", snapshot => {
      let dataList = [];
      snapshot.forEach(child => {
        dataList.push(child.val());
      });
      dispatch({
        type: "PAST",
        payload: dataList
      });
    });
};
