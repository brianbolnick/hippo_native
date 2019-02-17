import React from "react";
import { View, Platform, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "components/Icon";
import * as colors from "utils/Colors";
import styled from "styled-components";
import Unavailable from "screens/Unavailable";
import RecipeList from "screens/Recipes/RecipeList";
import RateRecipe from "screens/Recipes/RateRecipe";
import ShareRecipe from "screens/Recipes/ShareRecipe";
import NewRecipe from "screens/Recipes/NewRecipe";
import Temp from "screens/Recipes/Temp";
import ShowRecipe from "screens/Recipes/ShowRecipe";
import Profile from "screens/Profile";
import {
  SignedOutRoutes,
  RecipeRoutes,
  SignedInRoutes,
  NewRecipeRoutes
} from "./routes";

export const createRootNavigator = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes },
        Recipe: { screen: RecipeRoutes }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    )
  );
