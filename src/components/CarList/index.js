import React from "react";
import CarItem from "../carItem/index";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";

const CarList = props => {
  return (
    <SafeAreaView style={styles.container}>
      {console.log(props.data)}
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <CarItem
            handleSubmit={props.handleSubmit}
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
