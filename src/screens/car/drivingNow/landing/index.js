import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../../../utilities/AppUtils";
import ActiveCar from "../activeCar/index";
import { styles } from "./styles";
import firebase from "firebase";

const DriveNowScreen = props => {
  const [isDriving, setDriving] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    firebase
      .database()
      .ref("registeredCar")
      .orderByChild("registeredBy")
      .equalTo("Hamza")
      .on("value", snapshot => {
        let isCarRegistered = false;
        console.log(snapshot.val());
        snapshot.forEach(function (data) {
          if (data.child("isRegistered").val()) {
            isCarRegistered = true;
            console.log("true called");
          }
        });
        setDriving(isCarRegistered);
      });
  };
  return (
    <View style={styles.container}>
      {isDriving ? (
        <ActiveCar />
      ) : (
        <View style={styles.containersub}>
          <Image
            style={styles.tinyLogo}
            source={require("../../../../../assets/car.png")}
          />
          <Text style={styles.content}>Not driving a car yet</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate("ReserveCar");
            }}
          >
            <Text style={styles.buttonContent}>MAKE A RESERVATION</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.content}>Want to earn using your car?</Text>
            <TouchableOpacity
              style={styles.buttonBottomContainer}
              onPress={() => {
                props.navigation.navigate("ListYourCar");
              }}
            >
              <Text style={styles.buttonContent}>LIST YOUR CAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

DriveNowScreen.navigationOptions = commonNavigation("Drive Now");
export default DriveNowScreen;
