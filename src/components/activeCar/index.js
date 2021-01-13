import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import firebase from "firebase";
import { connect } from "react-redux";
import { returned_car } from "../../actions/returnedCar";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const ActiveCarScreen = props => {
  const [active, isCarActive] = useState(false);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const isCarStarted = () => {
    firebase
      .database()
      .ref("registeredCar")
      .orderByChild("registeredBy")
      .equalTo("Hamza")
      .once("value", snapshot => {
        snapshot.forEach(function (data) {
          data.ref.child("isDriving").set(true);
        });
      });
  };
  const getData = () => {
    firebase
      .database()
      .ref("registeredCar")
      .orderByChild("registeredBy")
      .equalTo("Hamza")
      .on("value", snapshot => {
        let isCarStarted = false;
        snapshot.forEach(function (data) {
          if (data.child("isDriving").val()) {
            isCarStarted = true;
          }
        });
        isCarActive(isCarStarted);
      });
  };

  const setPastBooking = () => {
    props.returned_car(props.carDetails, props.navigate);
    returnedCar();
  };

  const returnedCar = () => {
    firebase
      .database()
      .ref("registeredCar")
      .orderByChild("registeredBy")
      .equalTo("Hamza")
      .once("value", snapshot => {
        snapshot.forEach(function (data) {
          data.ref.child("isRegistered").set(false);
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: "500" }}>
        {props.carDetails.name}
      </Text>
      <Text style={{ paddingLeft: 10, fontSize: 14, fontWeight: "normal" }}>
        {props.carDetails.color}
      </Text>
      <View style={styles.subContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/reserved.png")}
        />
      </View>
      <View style={styles.subContent}>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Car Type
          </Text>
          <Text>{props.carDetails.type}</Text>
        </View>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Seater
          </Text>
          <Text>{props.carDetails.seating}</Text>
        </View>
        <View>
          <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 12 }}>
            Transmission
          </Text>
          <Text>{props.carDetails.transmission}</Text>
        </View>
      </View>
      {loading && (
        <AnimatedCircularProgress
          style={styles.animatedCircular}
          size={50}
          width={10}
          fill={100}
          duration={2000}
          tintColor="#00e0ff"
          onAnimationComplete={() => {
            // isCarActive(!isCarActive);
            isCarActive(true);
            isLoading(false);
          }}
          backgroundColor="#3d5875"
        />
      )}
      {!active ? (
        <View>
          <View style={styles.statusContent}>
            <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.6)" }}>
              Booking starts at
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "rgba(0, 0, 0, 0.6)",
                fontWeight: "500"
              }}
            >
              Wed 09/09/2020
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              borderWidth: 0.5,
              borderColor: "#ddd"
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              // props.navigation.navigate("Reservation");
              isCarStarted();
              isLoading(true);
            }}
          >
            <Text style={styles.buttonContent}>START DRIVING</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.statusContent}>
            <View style={styles.lockContent}>
              <View style={styles.lockItem}>
                <Image
                  style={styles.lock}
                  source={require("../../../assets/lock_open.png")}
                />
              </View>
              <View style={styles.lockItem}>
                <Image
                  style={styles.lock}
                  source={require("../../../assets/lock.png")}
                />
              </View>
              <View style={styles.lockItemContent}>
                <Text style={styles.lockItemText}>LOCK CAR</Text>
              </View>
            </View>
            <View style={styles.timeEndingContent}>
              <Text style={styles.timeEndingText}>Time ending in</Text>
              <Text style={styles.timeEndingDayText}>1 Day </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              borderWidth: 0.5,
              borderColor: "#ddd"
            }}
          />
          <TouchableOpacity
            style={styles.buttonActiveContainer}
            onPress={() => {
              // props.navigation.navigate("Reservation");
              //isLoading(true);
              setPastBooking();
            }}
          >
            <Text style={styles.buttonActiveContent}>EXTEND</Text>
            <Text style={styles.buttonActiveContent}>RETURN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  isDataLoaded: state.reserve_car.isDataLoaded
});

export default connect(mapStateToProps, { returned_car })(ActiveCarScreen);
