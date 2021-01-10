import React from "react";
import { Text, View } from "react-native";
import AppStatusBar from "../../utilities/AppStatusBar";
import { commonNavigation } from "../../utilities/AppUtils";

const Profile = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppStatusBar barStyle="light-content" />

      <Text>{Profile}</Text>
    </View>
  );
};
Profile.navigationOptions = commonNavigation("Profile");

export default Profile;
