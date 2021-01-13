import firebase from "firebase";
import { GET_ALL_CARS } from "./types";
import Toast from "react-native-toast-message";

export const getAllCar = () => dispatch => {
  let dataList = [];
  firebase
    .database()
    .ref("rentCarsList")
    .orderByChild("name")
    .once("value")
    .then(snapshot => {
      snapshot.forEach(child => {
        dataList.push(child.val());
      });
      dispatch({
        type: GET_ALL_CARS,
        payload: dataList
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_CARS,
        payload: []
      });
    });
};

//CREATE
export const createCarList = (item, props) => async dispatch => {
  let carListRef = firebase.database().ref("rentCarsList");
  let newCarRef = carListRef.push();
  await newCarRef
    .set(item)
    .then(uploadImageAsync(item.image, item.name))
    .then(resp => {
      setTimeout(() => {
        props.navigation.goBack();
        Toast.show({
          text1: "Congrats",
          text2: "Car added succesfully 👋"
        });
      }, 2000);
      dispatch({
        type: CREATE_A_CAR,
        payload: true
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_A_CAR,
        payload: false
      });
    });
};

async function uploadImageAsync(uri, name) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child("uploads/" + name);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}
