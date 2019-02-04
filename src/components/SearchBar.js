import React from "react";
import { Text, View, TextInput } from "react-native";
import * as colors from "utils/Colors";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledInput = styled.TextInput`
  padding-top: 8;
  font-size: 16;
  color: ${colors.black};
  font-weight: 600;
  border-color: ${({ isFocused }) =>
    isFocused ? colors.red : colors.darkGray};
  border-width: 1px;
  border-radius: 8;
  padding-vertical: 6;
  padding-horizontal: 14;
  width: 100%;
  padding-left: 32;
`;

const Container = styled.View`
  width: 88%;
  padding-horizontal: 8;
  margin-bottom: 8;
  position: relative;
  align-self: flex-start;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 10;
  z-index: 4;
  left: 16;
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
        <StyledIcon color={colors.mutedGray} name="search" size={16} />
        <StyledInput
          icon="search"
          isFocused={isFocused}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedGray}
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
