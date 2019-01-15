import React from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { primaryGradientArray } from 'utils/Colors';
import { LinearGradient } from 'expo';
import { onSignIn } from "utils/auth";
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



export default ({ navigation }) => (
	<LinearGradient colors={primaryGradientArray} style={styles.container}>
		<ScreenContainer behavior="padding" >
		<LogoContainer>
			<StyledImage resizeMode="contain" source={Logo}/>
		</LogoContainer>
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

		//<FormContainer>
			//<Card>
				//<FormLabel>Email</FormLabel>
				//<FormInput placeholder="Email address..." />
				//<FormLabel>Password</FormLabel>
				//<FormInput secureTextEntry placeholder="Password..." />
				//<FormLabel>Confirm Password</FormLabel>
				//<FormInput secureTextEntry placeholder="Confirm Password..." />

				//<Button
					//buttonStyle={{ marginTop: 20 }}
					//backgroundColor="#03A9F4"
					//title="SIGN UP"
					//onPress={() => {
						//onSignIn().then(() => navigation.navigate("SignedIn"));
					//}}
				///>
				//<Button
					//buttonStyle={{ marginTop: 20 }}
					//backgroundColor="transparent"
					//textStyle={{ color: "#bcbec1" }}
					//title="Sign In"
					//onPress={() => navigation.navigate("SignIn")}
				///>
			//</Card>
		//</FormContainer>

