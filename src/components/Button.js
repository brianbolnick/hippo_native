import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { LinearGradient, Constants } from "expo";
import styled from "styled-components";
import * as colors from "utils/Colors";

const StyledOpacity = styled.TouchableHighlight`
  height: 56;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-vertical: 4;

  ${({ secondary }) =>
    secondary &&
    `
		border-color: ${colors.red};
		border-width: 2;
	`}

  ${({ tertiary }) =>
    tertiary &&
    `
		margin-vertical: 2;
	`}
`;
const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 800;

  ${({ secondary }) =>
    secondary &&
    `
		color: ${colors.red};
	`}

  ${({ tertiary }) =>
    tertiary &&
    `
		color: ${colors.black};
		font-size: 14px;
		font-weight: 600;
	`}

  ${({ disabled }) =>
    disabled &&
    `
		color: ${colors.darkGray};
	`}


`;

const Button = ({
  loading,
  onPress,
  label,
  textColor,
  backgroundColor,
  secondary,
  tertiary,
  disabled,
  ...rest
}) => (
  <StyledOpacity
    onPress={disabled ? null : onPress}
    secondary={secondary}
    tertiary={tertiary}
    disabled={disabled}
    underlayColor={tertiary ? "transparent" : colors.mutedGray}
  >
    <LinearGradient
      colors={
        secondary || tertiary
          ? []
          : disabled
          ? colors.disabledGradientArray
          : colors.primaryGradientArray
      }
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={
        secondary
          ? styles.gradientSecondary
          : tertiary
          ? styles.gradientTertiary
          : styles.gradientPrimary
      }
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="large" color={colors.white} />
      ) : (
        <ButtonText
          secondary={secondary}
          tertiary={tertiary}
          disabled={disabled}
        >
          {label}
        </ButtonText>
      )}
    </LinearGradient>
  </StyledOpacity>
);

const styles = StyleSheet.create({
  gradientPrimary: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 4
  },
  gradientSecondary: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 4,
    borderColor: colors.red,
    borderWidth: 2,
    marginVertical: 4
  },
  gradientTertiary: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 2
  }
});

export default Button;
