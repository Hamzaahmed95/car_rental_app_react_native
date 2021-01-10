import React from "react";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

// import screen components
import DrivingScreen from "../driving/index";
import PastBookScreen from "../pastBook/index";

const DrivingStack = createStackNavigator(
  {
    Driving: DrivingScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const PastBookStack = createStackNavigator(
  {
    PastBook: PastBookScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const TabNavigator = createMaterialTopTabNavigator({
  DriveScreen: {
    screen: DrivingStack,
    navigationOptions: {
      tabBarLabel: "DRIVING NOW"
    }
  },
  PastBookingScreen: {
    screen: PastBookStack,
    navigationOptions: {
      tabBarLabel: "PAST BOOKINGS"
    }
  }
});

export default createAppContainer(TabNavigator);
