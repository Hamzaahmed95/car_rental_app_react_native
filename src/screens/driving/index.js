import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const Driving = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/car.png")}
      />
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
  }
});

export default Driving;
