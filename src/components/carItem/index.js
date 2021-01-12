import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import firebase from "firebase";
import Toast from "react-native-toast-message";

const CarItem = props => {
  const [uris, setUri] = useState();
  // useEffect(async () => {
  //   getImages();
  //   (async function getImages() {
  //     const ref = firebase
  //       .storage()
  //       .ref()
  //       .child("uploads/" + props.name);
  //     setUri(await ref.getDownloadURL());
  //     console.log("URIS" + uris);
  //   })();
  // }, []);

  const handleSubmit = item => {
    console.log("which item is this?" + item + " ");
    const registeredCar = {
      car: item,
      isRegistered: true,
      registeredBy: "Hamza"
    };
    storeRegisteredCarList(registeredCar);
  };
  const storeRegisteredCarList = registeredCar => {
    let registeredCarRef = firebase.database().ref("registeredCar");
    let newCarRegisteredRef = registeredCarRef.push();
    newCarRegisteredRef
      .set(registeredCar)
      .then(
        setTimeout(() => {
          props.navigation.goBack();
          Toast.show({
            text1: "Congrats",
            text2: "Car has been registered 👋"
          });
        }, 2000)
      )
      .catch(err => showAlert("There is an error while uploading"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainers}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/car_image.png")}
        />
        <View style={styles.subcontainer}>
          <Text style={styles.carname}>{props.name}</Text>
          <Text style={styles.cardetail}>{props.color}</Text>
          <Text>Available</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      />
      <View style={styles.carrateContainer}>
        <Text style={styles.carratefont}>MYR 20.00 / HR</Text>
        <TouchableOpacity onPress={() => handleSubmit(props.name)}>
          <Text style={styles.carratefontB}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarItem;
