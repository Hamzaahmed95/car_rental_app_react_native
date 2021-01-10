import React from "react";
import { Text, View, ScrollView, Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import screen components
import Home from "./home";
import Car from "./car/index";
import Profile from "./profile";
import Setting from "./setting";

import CarHome from "./carHome";

const HomeStack = createStackNavigator({
  Home: Home
});

const CarStack = createStackNavigator({
  Car: CarHome
});

const ProfileStack = createStackNavigator({
  Profile: Profile
});

const SettingStack = createStackNavigator({
  Setting: Setting
});

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="home" size={24} color={tintColor} />
      )
    }
  },
  CarScreen: {
    screen: CarStack,
    navigationOptions: {
      tabBarLabel: "Car",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
      )
    }
  },
  ProfileScreen: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "profile",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="star" size={24} color={tintColor} />
      )
    }
  },
  SettingScreen: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: "Setting",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="settings" size={24} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);
