import React from "react";
import { Text, View, StyleSheet,  KeyboardAvoidingView } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import * as colors from 'utils/Colors';
import { LinearGradient } from 'expo';
import Image from 'react-native-remote-svg'
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import styled from 'styled-components'
const Logo = require('images/hippo-text.svg');

const StyledText = styled.Text`
	font-size: 24px;
	color: ${colors.black};
	font-weight: 400;
	margin-vertical: 24;
`;

const LogoContainer = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 40;
`;

const ScreenContainer = styled.KeyboardAvoidingView `
	flex: 1;
	align-items: center;
`;

const FormContainer = styled.View`
`;

const ButtonContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-vertical: 10;
`;

const Card = styled.View`
	width: 325;
	margin-top: 40;
	border-radius: 5;
`;

const StyledButton = styled(Button)`
	margin-vertical: 16;
`;

export default ({ navigation }) => (
		<ScreenContainer behavior="padding" style={styles.container}>
			<Card>
				<Text>Do you have a family join code?</Text>
				<ButtonContainer>
					<StyledButton
						label="I have a code"
						onPress={() => navigation.navigate("SignIn")}
					/>
					<StyledButton
						label="Create a new family"
						tertiary
						onPress={() => navigation.navigate("SignUp")}
					/>
				</ButtonContainer>
			</Card>
		</ScreenContainer>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		paddingBottom: 40,
		alignItems: 'center',
		justifyContent: 'space-around'
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


