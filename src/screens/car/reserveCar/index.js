import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../../utilities/AppUtils";
import { carData } from "../../../utilities/dummyData/index";
import CarList from "../../../components/CarList";
import { styles } from "./styles";

const ReserveCarScreen = props => {
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
            source={require("../../../../assets/time.png")}
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
            source={require("../../../../assets/end.png")}
          />
          <Text style={styles.buttonContent}>00:30 AM - Wed, 28/09/2020</Text>
        </TouchableOpacity>
      </View>
      <CarList handleSubmit={handleSubmit} data={carData} />
    </View>
  );
};

ReserveCarScreen.navigationOptions = commonNavigation("Make a Reservation");
export default ReserveCarScreen;
