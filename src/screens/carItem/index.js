import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CarItem = props => {
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
        <Text style={styles.carratefontB}>BOOK NOW</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  carrateContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    color: "#828282",
    fontSize: 12
  },
  carratefont: {
    color: "#828282",
    fontSize: 12
  },
  carratefontB: {
    color: "#56CCF2",
    fontSize: 12
  },

  subcontainers: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  carname: {
    fontSize: 16
  },
  cardetail: {
    fontSize: 12
  },
  subcontainer: {
    paddingLeft: 20,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  tinyLogo: {
    width: 78,
    height: 59
  },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 2,
    fontSize: 18,
    borderRadius: 6
  }
});
export default CarItem;
