import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "utils/auth";
import Button from 'components/Button';
import styled from 'styled-components'
import {ButtonContainer, ScreenContainer, Card, HeaderContainer, Header ,SubHeader} from './AuthStyledComponents';

//export default ({ navigation }) => (
	//<LinearGradient colors={primaryGradientArray} style={styles.container}>
		//<ScreenContainer behavior="padding" >
			//<LogoContainer>
				//<StyledImage resizeMode="contain" source={Logo}/>
			//</LogoContainer>
			//<FormContainer>
				//<Card>
					//<FormLabel>Email</FormLabel>
					//<FormInput placeholder="Email address..." />
					//<FormLabel>Password</FormLabel>
					//<FormInput secureTextEntry placeholder="Password..." />
					//<ButtonContainer>
						//<Button
							//label="Sign In"
							//onPress={() => onSignIn().then(() => navigation.navigate("SignedIn"))}
						///>
					//</ButtonContainer>
				//</Card>
			//</FormContainer>
		//</ScreenContainer>
	//</LinearGradient>
//);

export default ({ navigation }) => (
		<ScreenContainer behavior="padding">
			<HeaderContainer>
				<SubHeader>Login</SubHeader>
				<Header>Welcome Back!</Header>
				<Card>
					<FormLabel>Email</FormLabel>
					<FormInput placeholder="Email Address" />
					<FormLabel>Password</FormLabel>
					<FormInput secureInput placeholder="Password" />
				</Card>
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

