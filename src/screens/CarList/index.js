import React from "react";
import CarItem from "../carItem/index";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

const CarList = props => {
  return (
    <SafeAreaView style={styles.container}>
      {console.log(props.data)}
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <CarItem name={item.name} color={item.color} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "black"
  },
  title: {
    fontSize: 32
  }
});

export default CarList;
