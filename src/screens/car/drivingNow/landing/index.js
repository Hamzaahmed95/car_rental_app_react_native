import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../../../utilities/AppUtils";
import ActiveCar from "../activeCar/index";
import { styles } from "./styles";

const DriveNowScreen = props => {
  const [driving, isDriving] = useState(false);
  return (
    <View style={styles.container}>
      {driving ? (
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
