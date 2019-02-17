import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import * as colors from "utils/Colors";
import styled from "styled-components";
import Unavailable from "screens/Unavailable";
import RecipeList from "screens/Recipes/RecipeList";
import NewRecipeEntry from "screens/NewRecipeEntry";
import Profile from "screens/Profile";
import Icon from "components/Icon";
import NewRecipeRoutes from "./NewRecipeRoutes";

const NewIconView = styled.View`
  background-color: ${colors.red};
  padding-vertical: 16;
  padding-horizontal: 16;
  border-radius: 50;
  position: relative;
  bottom: 8;
`;

const NewIcon = ({ tintColor, ...rest }) => (
  <NewIconView>
    <Icon name="plus" size={32} color={tintColor} />
  </NewIconView>
);

export default createBottomTabNavigator(
  {
    Recipes: {
      screen: RecipeList,
      navigationOptions: {
        tabBarLabel: "Recipes",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" size={24} color={tintColor} />
        )
      }
    },
    Create: {
      screen: NewRecipeEntry,
      navigationOptions: {
        tabBarLabel: "Create",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="plus" size={24} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={24} color={tintColor} />
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
