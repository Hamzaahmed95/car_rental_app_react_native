import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { commonNavigation } from "../../utilities/AppUtils";
import { carData } from "../../utilities/Constants";
import CarList from "../CarList/index";

const Reservation = props => {
  const handleSubmit = () => {
    props.navigation.navigate("Driving", { status: true });
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.navigation.navigate("Reservation");
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/time.png")}
          />
          <Text style={styles.buttonContent}>00:30 AM - Wed, 28/09/2020</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.navigation.navigate("Reservation");
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../../../assets/end.png")}
          />
          <Text style={styles.buttonContent}>00:30 AM - Wed, 28/09/2020</Text>
        </TouchableOpacity>
      </View>
      <CarList handleSubmit={handleSubmit} data={carData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  subcontainer: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    width: "100%"
  },
  tinyLogo: {
    width: 20.61,
    marginRight: 10,
    height: 20
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
    fontSize: 16,
    color: "black"
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    paddingLeft: 15,
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 328,
    height: 46
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
Reservation.navigationOptions = commonNavigation("Reservation");
export default Reservation;
