import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import firebase from "firebase";

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
        <TouchableOpacity onPress={props.handleSubmit}>
          <Text style={styles.carratefontB}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarItem;
