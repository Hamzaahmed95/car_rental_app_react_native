import React from "react";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import DrivingScreen from "./drivingScreen/index";
import PastBookingScreen from "./pastBookingScreen/index";

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
    PastBook: PastBookingScreen
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
      tabBarLabel: "DRIVING NOW",
      tabBarOptions: {
        style: {
          backgroundColor: "#56CCF2" //color you want to change
        }
      }
    }
  },
  PastBookingScreen: {
    screen: PastBookStack,
    navigationOptions: {
      tabBarLabel: "PAST BOOKINGS",
      tabBarOptions: {
        style: {
          backgroundColor: "#56CCF2" //color you want to change
        }
      }
    }
  }
});

export default createAppContainer(TabNavigator);
