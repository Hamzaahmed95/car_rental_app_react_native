import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../utilities/AppUtils";

const Driving = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/car.png")}
      />
      <Text style={styles.content}>Not driving a car yet</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonContent}>MAKE A RESERVATION</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.content}>Want to earn using your car?</Text>
        <TouchableOpacity
          style={styles.buttonBottomContainer}
          onPress={() => {
            props.navigation.navigate("CarDetail");
          }}
        >
          <Text style={styles.buttonContent}>LIST YOUR CAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  tinyLogo: {
    width: 286,
    height: 211
  },
  content: {
    fontSize: 14,
    marginTop: 30,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Roboto"
  },
  buttonContent: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "white"
  },
  buttonContainer: {
    backgroundColor: "#56CCF2",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 196,
    height: 36
  },
  buttonBottomContainer: {
    backgroundColor: "#56CCF2",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 143,
    height: 36
  },
  bottomContainer: {
    paddingBottom: 50,
    position: "absolute",
    alignItems: "center",
    bottom: 0
  }
});
Driving.navigationOptions = commonNavigation("Driving");
export default Driving;
