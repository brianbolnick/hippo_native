import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import * as colors from "utils/Colors";

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40;
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

export const ScreenContainer = styled.View`
  flex: 1;
  padding-vertical: 50;
  padding-horizontal: 24;
  justify-content: space-around;
`;

export const Card = styled.View`
  background-color: white;
  width: 100%;
  margin-top: 40;
  border-radius: 5;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 10px;
  padding-vertical: 40;
  padding-horizontal: 8;
`;

export const HeaderContainer = styled.View``;

export const Header = styled.Text`
  color: ${colors.black};
  font-weight: 900;
  font-size: 38px;
`;
export const SubHeader = styled.Text`
  color: ${colors.mutedGray};
  font-weight: 800;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  font-size: 16;
  font-weight: 500;
  margin-vertical: 16;
  color: ${colors.red};
`;
