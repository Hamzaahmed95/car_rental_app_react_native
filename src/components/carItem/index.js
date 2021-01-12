import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import firebase from "firebase";
import Toast from "react-native-toast-message";
import { connect } from "react-redux";
import { reserve_car } from "../../actions/reservedCar";
const CarItem = props => {
  const handleSubmit = item => {
    console.log("which item is this?" + item + " ");
    const registeredCar = {
      car: item,
      isRegistered: true,
      registeredBy: "Hamza",
      isDriving: false
    };
    props.reserve_car(registeredCar, props);
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
const mapStateToProps = state => ({
  isDataLoaded: state.reserve_car.isDataLoaded
});

export default connect(mapStateToProps, { reserve_car })(CarItem);
