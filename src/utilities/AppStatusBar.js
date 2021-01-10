import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { statusBarColor } from "../utilities/Constants";

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar]}>
      <StatusBar backgroundColor={statusBarColor} {...props} />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT
  }
});

export default AppStatusBar;
