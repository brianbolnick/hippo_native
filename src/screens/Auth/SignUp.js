import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import {ButtonContainer, ScreenContainer, Card, HeaderContainer, Header ,SubHeader} from './AuthStyledComponents';

export default ({ navigation }) => (
		<ScreenContainer behavior="padding">
			<HeaderContainer>
				<SubHeader>Create An Account</SubHeader>
				<Header>Your Name</Header>
				<Card>
					<FormLabel>First Name</FormLabel>
					<FormInput placeholder="First Name" />
					<FormLabel>Last Name</FormLabel>
					<FormInput placeholder="Last Name" />
					<FormLabel>Email</FormLabel>
					<FormInput placeholder="Email Address" />
				</Card>
			</HeaderContainer>

			<ButtonContainer>
				<Button
					label="Next"
					onPress={() => navigation.navigate("FamilyCodeIntro")}
				/>
				<Button
						label="Go Back"
						tertiary
						onPress={() => navigation.navigate("Welcome")}
					/>
			</ButtonContainer>
		</ScreenContainer>
);

