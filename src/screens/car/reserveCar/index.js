import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../../utilities/AppUtils";
import CarListWrapper from "../../../components/carListWrapper";
import { styles } from "./styles";
import { getAllCar } from "../../../actions/rentCarList";
import { connect } from "react-redux";

const ReserveCarScreen = props => {
  useEffect(() => {
    props.getAllCar();
  }, []);
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
      <CarListWrapper
        navigation={props.navigation}
        data={props.mycar}
        flag={true}
      />
    </View>
  );
};

ReserveCarScreen.navigationOptions = commonNavigation("Make a Reservation");

const mapStateToProps = state => ({
  mycar: state.my_car.myCar
});

export default connect(mapStateToProps, { getAllCar })(ReserveCarScreen);
