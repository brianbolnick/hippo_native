import React from "react";
import styled from 'styled-components'
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";

export const LogoContainer = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 40;
`;

export const ScreenContainer = styled.KeyboardAvoidingView `
	flex: 1;
	align-items: center;
`;

export const StyledImage = styled.Image`
	width: 300;
	height: 100;
`;

export const FormContainer = styled.View`
`;

export const ButtonContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-vertical: 10;
	margin-left: auto;
	margin-right: auto;
	width: 300;
`;

export const Card = styled.View`
	background-color: white;
	width: 350;
	margin-top: 40;
	border-radius: 5;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 15px;
`;

export const styles = StyleSheet.create({
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



