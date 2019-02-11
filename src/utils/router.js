import React from "react";
import { View, Platform, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "components/Icon";
import { IconEdit, IconShare, IconUser } from "components/CustomIcon";
import * as colors from "utils/Colors";
import styled from "styled-components";
import SignUp from "screens/Auth/SignUp";
import FamilyCodeIntro from "screens/Auth/FamilyCodeIntro";
import FamilyCodeNew from "screens/Auth/FamilyCodeNew";
import SetPassword from "screens/Auth/SetPassword";
import FamilyCodeExisting from "screens/Auth/FamilyCodeExisting";
import Welcome from "screens/Welcome";
import Unavailable from "screens/Unavailable";
import SignIn from "screens/Auth/SignIn";
import RecipeList from "screens/Recipes/RecipeList";
import RateRecipe from "screens/Recipes/RateRecipe";
import ShareRecipe from "screens/Recipes/ShareRecipe";
import NewRecipe from "screens/Recipes/NewRecipe";
import Temp from "screens/Recipes/Temp";
import ShowRecipe from "screens/Recipes/ShowRecipe";
import Profile from "screens/Profile";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

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

export const SignedOut = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  SetPassword: {
    screen: SetPassword,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },

  FamilyCodeIntro: {
    screen: FamilyCodeIntro,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  FamilyCodeNew: {
    screen: FamilyCodeNew,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  FamilyCodeExisting: {
    screen: FamilyCodeExisting,
    navigationOptions: {
      headerStyle,
      headerTransparent: true
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle,
      headerTransparent: true,
      headerLeft: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerStyle,
      headerTransparent: true,
      headerLeft: null
    }
  }
});

export const Recipe = createBottomTabNavigator(
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
        tabBarIcon: ({ tintColor }) => <IconShare size={24} color={tintColor} />
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

export const SignedIn = createBottomTabNavigator(
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
      screen: Unavailable,
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

export const createRootNavigator = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        },
        Recipe: {
          screen: Recipe
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    )
  );
