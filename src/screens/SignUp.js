import React from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { primaryGradientArray } from 'utils/Colors';
import { LinearGradient } from 'expo';
import { onSignIn } from "utils/auth";
//import Button from 'components/Button/Button';
import styled from 'styled-components'
const Logo = require('images/icon-white.png');

const LogoContainer = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 40;
`;

const ScreenContainer = styled.KeyboardAvoidingView `
	flex: 1;
	align-items: center;
`;

const StyledImage = styled.Image`
	width: 300;
	height: 100;
`;

const FormContainer = styled.View`
`;

const Card = styled.View`
	background-color: white;
	width: 350;
	margin-top: 40;
	border-radius: 5;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 15px;
`;



export default ({ navigation }) => (
	<LinearGradient colors={primaryGradientArray} style={styles.container}>
		<ScreenContainer behavior="padding" >
		<LogoContainer>
			<StyledImage resizeMode="contain" source={Logo}/>
		</LogoContainer>
		<FormContainer>
			<Card>
				<FormLabel>Email</FormLabel>
				<FormInput placeholder="Email address..." />
				<FormLabel>Password</FormLabel>
				<FormInput secureTextEntry placeholder="Password..." />
				<FormLabel>Confirm Password</FormLabel>
				<FormInput secureTextEntry placeholder="Confirm Password..." />

				<Button
					title="Create Account"
					onPress={() => {
						onSignIn().then(() => navigation.navigate("SignedIn"));
					}}
				/>
				<Button
					buttonStyle={{ marginTop: 20 }}
					backgroundColor="transparent"
					textStyle={{ color: "#bcbec1" }}
					title="Sign In"
					onPress={() => navigation.navigate("SignIn")}
				/>
			</Card>
		</FormContainer>

		</ScreenContainer>
</LinearGradient>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40
	},
	centered: {
		alignItems: 'center'
	},
	inputContainer: {
		marginTop: 40,
		paddingLeft: 15
	},
	list: {
		flex: 1,
		marginTop: 70,
		paddingLeft: 15,
		marginBottom: 10
	},
	scrollableList: {
		marginTop: 15
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	deleteAllButton: {
		marginRight: 40
	}
});


