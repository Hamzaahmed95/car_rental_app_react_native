import React from "react";
import { Text, View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";

const Setting = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />

      <Text>{Setting}</Text>
    </View>
  );
};
Setting.navigationOptions = commonNavigation("Setting");

export default Setting;
