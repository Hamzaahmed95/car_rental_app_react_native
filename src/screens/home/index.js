import React from "react";
import { Text, View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";
import { name } from "../../utilities/Constants";
const Home = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />

      <Text>{name}</Text>
    </View>
  );
};
Home.navigationOptions = commonNavigation("Home");

export default Home;
