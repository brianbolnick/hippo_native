import React from "react";
import { Text, View, TextInput } from "react-native";
import * as colors from "utils/Colors";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledInput = styled.TextInput`
  padding-top: 8;
  font-size: 16;
  color: ${colors.white};
  font-weight: 600;
  background-color: ${colors.white};
  border-color: ${colors.white};
  border-width: 1px;
  border-radius: 8;
  padding-vertical: 6;
  padding-horizontal: 14;
  width: 100%;
  padding-left: 32;
`;

const Container = styled.View`
  width: 100%;
  padding-horizontal: 16;
  margin-bottom: 8;
  position: relative;
  align-self: flex-start;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 10;
  z-index: 4;
  left: 24;
`;

export default class SearchBar extends React.Component {
  state = {
    isFocused: false
  };

  render() {
    const { onChange, placeholder } = this.props;
    const { isFocused } = this.state;

    return (
      <Container>
        <StyledIcon color={colors.offGray} name="search" size={16} />
        <StyledInput
          icon="search"
          isFocused={isFocused}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.offGray}
          autoCapitalize="none"
          underlineColorAndroid={colors.red}
          selectionColor={colors.black}
          maxLength={80}
          returnKeyType="done"
          autoCorrect={false}
          blurOnSubmit
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false })}
        />
      </Container>
    );
  }
}
