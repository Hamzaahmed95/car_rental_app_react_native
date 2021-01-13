import React from "react";
import CarItem from "../carItem/index";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

//lit of rent a car
const CarList = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
      }}
    >
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <CarItem
            navigation={props.navigation}
            name={item.name}
            color={item.color}
            source={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CarList;
