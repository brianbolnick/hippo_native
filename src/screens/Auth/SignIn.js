import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import { primaryGradientArray } from 'utils/Colors';
import { LinearGradient } from 'expo';
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import styled from 'styled-components'
const Logo = require('images/icon-white.png');
import { LogoContainer, ScreenContainer, StyledImage, FormContainer, ButtonContainer, Card, styles } from './AuthStyledComponents'

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
					<ButtonContainer>
						<Button
							label="Sign In"
							onPress={() => onSignIn().then(() => navigation.navigate("SignedIn"))}
						/>
					</ButtonContainer>
				</Card>
			</FormContainer>
		</ScreenContainer>
	</LinearGradient>
);

