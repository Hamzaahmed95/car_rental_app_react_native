import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const PastBookingItem = props => {
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

        <TouchableOpacity onPress={() => console.log("clicked!")}>
          <Text style={styles.carratefontB}>Check Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PastBookingItem;
