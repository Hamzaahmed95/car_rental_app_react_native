import React from "react";
import { View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";

const Home = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />
    </View>
  );
};
Home.navigationOptions = commonNavigation("Home");

export default Home;
