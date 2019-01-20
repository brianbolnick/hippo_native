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
				<Header>Join A Family</Header>
				<KeyboardAvoidingView>
					<Card>
						<Input label="Family Join Code" placeholder="Family Code" />
					</Card>
				</KeyboardAvoidingView>
			</HeaderContainer>

			<ButtonContainer>
				<Button
					label="Let's Go!"
						onPress={() => onSignIn().then(() => navigation.navigate("SignedIn"))}
				/>
				<Button
						label="Go Back"
						tertiary
						onPress={() => navigation.navigate("FamilyCodeIntro")}
				/>
			</ButtonContainer>
		</ScreenContainer>
);

