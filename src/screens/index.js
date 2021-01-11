import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import screen components
import HomeScreen from "./home";
import ListYourCarScreen from "./car/listYourCar/index";
import ProfileScreen from "./profile";
import SettingScreen from "./setting";
import ReserveCarScreen from "./car/reserveCar/index";
import CarScreen from "./car";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const CarStack = createStackNavigator(
  {
    Car: CarScreen,
    ListYourCar: ListYourCarScreen,
    ReserveCar: ReserveCarScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#56CCF2"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

const SettingStack = createStackNavigator({
  Setting: SettingScreen
});

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)"
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="home" size={24} color={tintColor} />
      )
    }
  },
  CarScreen: {
    screen: CarStack,
    navigationOptions: {
      tabBarLabel: "Car",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)"
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="car" size={24} color={tintColor} />
      )
    }
  },
  ProfileScreen: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "profile",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)"
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="account" size={24} color={tintColor} />
      )
    }
  },
  SettingScreen: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: "Setting",
      tabBarOptions: {
        activeTintColor: "#56CCF2",
        inactiveTintColor: "rgba(0, 0, 0, 0.38)"
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="settings" size={24} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);
