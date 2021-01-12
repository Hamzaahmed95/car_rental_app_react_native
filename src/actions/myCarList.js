import firebase from "firebase";
import { GET_ALL_CARS } from "./types";

export const getAllCar = () => dispatch => {
  let dataList = [];
  firebase
    .database()
    .ref("rentCarsList")
    .orderByChild("name")
    .once("value")
    .then(snapshot => {
      snapshot.forEach(child => {
        console.log("********");
        dataList.push(child.val());
      });
      dispatch({
        type: GET_ALL_CARS,
        payload: dataList
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_ALL_CARS,
        payload: []
      });
    });
};
