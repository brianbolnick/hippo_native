import React from "react";
import { Platform, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "components/Icon";
import * as colors from "utils/Colors";
import RateRecipe from "screens/Recipes/RateRecipe";
import ShareRecipe from "screens/Recipes/ShareRecipe";
import ShowRecipe from "screens/Recipes/ShowRecipe";
import Profile from "screens/Profile";

export default createBottomTabNavigator(
  {
    RateRecipe: {
      screen: RateRecipe,
      navigationOptions: {
        tabBarLabel: "Rate",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={24} color={tintColor} />
        )
      }
    },
    ShowRecipe: {
      screen: ShowRecipe,
      navigationOptions: {
        tabBarLabel: "Recipe",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="utensils" size={24} color={tintColor} />
        )
      }
    },
    ShareRecipe: {
      screen: ShareRecipe,
      navigationOptions: {
        tabBarLabel: "Share",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="share" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10
      },
      activeTintColor: colors.red,
      labelStyle: {
        fontSize: 12
      },
      showLabel: false
    }
  }
);
