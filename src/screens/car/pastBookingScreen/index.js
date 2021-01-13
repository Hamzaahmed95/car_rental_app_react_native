import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView, FlatList } from "react-native";
import PastBookingItem from "../../../components/pastBookingItem/index";
import { getMyPastBooking } from "../../../actions/returnedCar";
import { connect } from "react-redux";

const PastBookingScreen = props => {
  useEffect(() => {
    props.getMyPastBooking();
  }, []);
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <SafeAreaView>
        <FlatList
          data={props.past_car}
          renderItem={({ item }) => (
            <PastBookingItem
              flag={false}
              navigation={props.navigation}
              name={item.name}
              color={item.color}
              source={item.image}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  past_car: state.returned_car.pastCar
});

export default connect(mapStateToProps, { getMyPastBooking })(
  PastBookingScreen
);
