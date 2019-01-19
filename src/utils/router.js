import React from "react";
import { Platform, StatusBar } from "react-native";
import {
	createBottomTabNavigator,
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer
} from "react-navigation";
import { FontAwesome } from '@expo/vector-icons';
import SignUp from "screens/Auth/SignUp";
import Welcome from "screens/Welcome";
import SignIn from "screens/Auth/SignIn";
import Home from "screens/Home";
import Profile from "screens/Profile";

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
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			headerStyle,
			headerTransparent: true
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: "Sign In",
			headerStyle
		}
	}
});

export const SignedIn = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: "Home",
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="home" size={30} color={tintColor} />
				)
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarLabel: "Profile", 
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="user" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			style: {
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
			}
		}
	}
);

export const createRootNavigator = (signedIn = false) => {
	return createAppContainer(createSwitchNavigator(
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
};
