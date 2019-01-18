import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components'
import * as colors from 'utils/Colors';
import { LinearGradient, Constants } from 'expo';

const StyledOpacity = styled.TouchableOpacity`
	border-radius: 5;
	justify-content: center;
	display: flex;
	align-items: center;
`

const ButtonText = styled.Text`
	color: ${ ({secondary}) => secondary ? colors.red : colors.white};
	font-size: 16;
	font-weight: 800;
`;

const Button = ({ onPress, label, textColor, backgroundColor, secondary, ...rest }) => (
	<LinearGradient
		colors={secondary ? [] : colors.primaryGradientArray}
		start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
		style={secondary ? styles.gradientSecondary : styles.gradientPrimary}
		onPress={onPress}
	>
		<StyledOpacity onPress={onPress} >
			<ButtonText secondary={secondary}>
				{label.toUpperCase()}
			</ButtonText>
		</StyledOpacity>
	</LinearGradient>
);

const styles = StyleSheet.create({
	gradientPrimary: {
		height: 48,
		alignItems: 'center', 
		justifyContent: 'center', 
		width: 150,
		borderRadius: 5
	},
	gradientSecondary: {
		height: 48,
		alignItems: 'center', 
		justifyContent: 'center', 
		width: 150,
		borderRadius: 5,
		borderColor: colors.red,
		borderWidth: 2
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
	},
	buttonContainer: {
		width: 200,
		alignItems: 'center',
	},
	buttonText: {
		textAlign: 'center',
		color: '#4C64FF',
		padding: 15,
		marginLeft: 1,
		marginRight: 1,
		width: 200
	}
});

export default Button;
