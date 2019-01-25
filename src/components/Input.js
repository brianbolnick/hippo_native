import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import * as colors from "utils/Colors";

const StyledInput = styled.TextInput`
  padding-top: 10;
  font-size: 18;
  color: ${colors.black};
  font-weight: 600;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? colors.red : colors.darkGray};
  border-bottom-width: 1px;
  padding-bottom: 16;
  width: 100%;

  ${({ large }) =>
    large &&
    `
		font-size: 40;
		font-weight: 900;
		text-align: center;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	`};
`;

const Container = styled.View`
  width: 100%;
  padding-horizontal: 8;
  margin-bottom: 32;
`;

const Label = styled.Text`
  color: ${colors.darkGray};
  font-weight: 600;
  font-size: 16px;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }
  render() {
    const {
      value,
      label,
      onChangeText,
      placeholder,
      textContentType,
      onBlur,
      large,
      keyboardType,
      ...rest
    } = this.props;
    const { isFocused } = this.state;

    return (
      <Container>
        {label && <Label>{label}</Label>}
        <StyledInput
          large={large}
          isFocused={isFocused}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedGray}
          autoCapitalize="none"
          underlineColorAndroid={colors.red}
          selectionColor={colors.black}
          maxLength={60}
          returnKeyType="done"
          autoCorrect={false}
          blurOnSubmit
          textContentType={textContentType}
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false }, onBlur && onBlur())}
          keyboardType={keyboardType}
          {...rest}
        />
      </Container>
    );
  }
}
export default Input;
