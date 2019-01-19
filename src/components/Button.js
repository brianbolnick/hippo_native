import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components'
import * as colors from 'utils/Colors';
import { LinearGradient, Constants } from 'expo';

const StyledOpacity = styled.TouchableHighlight`
	height: 56;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-vertical: 4;

	${({secondary}) => secondary && `
		border-color: ${colors.red};
		border-width: 2;
	`}

	${({tertiary}) => tertiary && `
		margin-vertical: 2;
	`}
`
const ButtonText = styled.Text`
	color: ${colors.white};
	font-size: 16px;
	font-weight: 800;

	${({secondary}) => secondary && `
		color: ${colors.red};
	`}

	${({tertiary}) => tertiary && `
		color: ${colors.black};
		font-size: 14px;
		font-weight: 600;
	`}
`;

const Button = ({ onPress, label, textColor, backgroundColor, secondary, tertiary, ...rest }) => (
	<StyledOpacity onPress={onPress} secondary={secondary} tertiary={tertiary}>
		<LinearGradient
			colors={(secondary || tertiary) ? [] : colors.primaryGradientArray}
			start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			style={secondary ? styles.gradientSecondary : tertiary ? styles.gradientTertiary : styles.gradientPrimary}
			onPress={onPress}
		>
			<ButtonText secondary={secondary} tertiary={tertiary}>
				{label}
			</ButtonText>
		</LinearGradient>
	</StyledOpacity>
);

const styles = StyleSheet.create({
	gradientPrimary: {
		height: '100%',
		alignItems: 'center', 
		justifyContent: 'center', 
		width: '100%',
		borderRadius: 4
	},
	gradientSecondary: {
		height: '100%',
		alignItems: 'center', 
		justifyContent: 'center', 
		width: '100%',
		borderRadius: 4,
		borderColor: colors.red,
		borderWidth: 2,
		marginVertical: 4
	},
	gradientTertiary: {
		height: 48,
		alignItems: 'center', 
		justifyContent: 'center', 
		width: '100%',
		marginVertical: 2
	}
});

export default Button;
