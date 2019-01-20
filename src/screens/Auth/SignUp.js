import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import Input from 'components/Input'
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import {ButtonContainer, ScreenContainer, Card, HeaderContainer, Header ,SubHeader} from './AuthStyledComponents';

export default ({ navigation }) => (
		<ScreenContainer behavior="padding">
			<HeaderContainer>
				<SubHeader>Create An Account</SubHeader>
				<Header>Who are you</Header>
				<KeyboardAvoidingView>
					<Card>
						<Input label="Full Name" textContentType="name" placeholder="Full Name" />
						<Input label="Email" textContentType="emailAddress" placeholder="Email Address" />
					</Card>
				</KeyboardAvoidingView>
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

