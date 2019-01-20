import React from "react";
import { Platform, StatusBar } from "react-native";
import {
	createBottomTabNavigator,
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer
} from "react-navigation";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'components/Icon/Icon';
import SignUp from "screens/Auth/SignUp";
import FamilyCodeIntro from "screens/Auth/FamilyCodeIntro";
import FamilyCodeNew from "screens/Auth/FamilyCodeNew";
import FamilyCodeExisting from "screens/Auth/FamilyCodeExisting";
import Welcome from "screens/Welcome";
import SignIn from "screens/Auth/SignIn";
import RecipeList from "screens/Recipes/RecipeList";
import Profile from "screens/Profile";
import * as colors from 'utils/Colors';

const headerStyle = {
	marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
	Welcome: {
		screen: Welcome, 
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

export const SignedIn = createBottomTabNavigator(
	{
		Recipes: {
			screen: RecipeList,
			navigationOptions: {
				tabBarLabel: "Recipes",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="utensils" size={24} color={tintColor} />
				)
			}
		},
		Create: {
			screen: Profile,
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
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
			},
			activeTintColor: colors.red,
			labelStyle: {
				fontSize: 12,
			},
			showLabel: false
		}
	}
);

export const createRootNavigator = (signedIn = false) => createAppContainer(createSwitchNavigator(
		{
			SignedIn: {
				screen: SignedIn
			},
			SignedOut: {
				screen: SignedOut
			}
		},
		{
			initialRouteName: signedIn ? "SignedIn" : "SignedOut"
		}
	));
