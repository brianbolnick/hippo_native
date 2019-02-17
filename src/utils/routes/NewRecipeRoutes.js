import React from "react";
import { createStackNavigator } from "react-navigation";
import { Platform, StatusBar } from "react-native";
import SignUp from "screens/Auth/SignUp";
import FamilyCodeIntro from "screens/Auth/FamilyCodeIntro";
import FamilyCodeNew from "screens/Auth/FamilyCodeNew";
import SetPassword from "screens/Auth/SetPassword";
import FamilyCodeExisting from "screens/Auth/FamilyCodeExisting";
import NewRecipeEntry from "screens/NewRecipeEntry";
import { HowMuch } from "screens/NewRecipe";
import SignIn from "screens/Auth/SignIn";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export default createStackNavigator({
  NewRecipeEntry: {
    screen: NewRecipeEntry,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  HowMuch: {
    screen: HowMuch,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  }
});
