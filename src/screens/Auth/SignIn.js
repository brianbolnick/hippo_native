import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import styled from 'styled-components'
import Input from 'components/Input'
import {ButtonContainer, ScreenContainer, Card, HeaderContainer, Header ,SubHeader} from './AuthStyledComponents';

export default ({ navigation }) => (
		<ScreenContainer behavior="padding">
			<HeaderContainer>
				<SubHeader>Login</SubHeader>
				<Header>Welcome Back!</Header>
				<KeyboardAvoidingView>
					<Card>
						<Input label="Email" placeholder="Email Address" textContentType="emailAddress"/>
						<Input secureTextEntry textContentType="password" label="Password" placeholder="Password" />
					</Card>
				</KeyboardAvoidingView>
			</HeaderContainer>

			<ButtonContainer>
					<Button
						label="Sign In"
						onPress={() => onSignIn().then(() => navigation.navigate("SignedIn"))}
					/>
					<Button
						label="Go Back"
						tertiary
						onPress={() => navigation.navigate("Welcome")}
					/>
			</ButtonContainer>
		</ScreenContainer>
);

