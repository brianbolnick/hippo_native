import React from "react";
import { createStackNavigator } from "react-navigation";
import { Platform, StatusBar } from "react-native";
import SignUp from "screens/Auth/SignUp";
import FamilyCodeIntro from "screens/Auth/FamilyCodeIntro";
import FamilyCodeNew from "screens/Auth/FamilyCodeNew";
import SetPassword from "screens/Auth/SetPassword";
import FamilyCodeExisting from "screens/Auth/FamilyCodeExisting";
import NewRecipeEntry from "screens/NewRecipeEntry";
import {
  HowMuch,
  HowLong,
  WhatsInIt,
  HowIsItMade,
  WhatDoesItLookLike,
  AnythingElse,
  RecipePreview
} from "screens/NewRecipe";
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
  },
  HowLong: {
    screen: HowLong,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  WhatsInIt: {
    screen: WhatsInIt,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  HowIsItMade: {
    screen: HowIsItMade,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },

  WhatDoesItLookLike: {
    screen: WhatDoesItLookLike,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  AnythingElse: {
    screen: AnythingElse,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  RecipePreview: {
    screen: RecipePreview,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  }
});
