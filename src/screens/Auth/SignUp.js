import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { API_URL, handleNetworkErrors } from "utils/constants";
import axios from "axios";
import { onSignIn } from "utils/auth";
import Button from "components/Button";
import styled from "styled-components";
import Input from "components/Input";
import {
  ButtonContainer,
  ScreenContainer,
  Card,
  HeaderContainer,
  Header,
  SubHeader,
  ErrorText
} from "./AuthStyledComponents";

const config = { headers: {} };

class SignUp extends React.Component {
  state = { email: "", name: "", error: "", loading: false };

  render() {
    const { navigation } = this.props;
    const { error, name, email } = this.state;

    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Create An Account</SubHeader>
          <Header>Who are you</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                onChangeText={text => this.setState({ name: text })}
                label="Full Name"
                textContentType="name"
                placeholder="Full Name"
              />
              <Input
                onChangeText={text => this.setState({ email: text })}
                label="Email"
                textContentType="emailAddress"
                placeholder="Email Address"
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Next"
            onPress={() =>
              navigation.navigate("SetPassword", {
                name,
                email
              })
            }
          />
          <Button
            label="Go Back"
            tertiary
            onPress={() => navigation.navigate("Welcome")}
          />
        </ButtonContainer>
      </ScreenContainer>
    );
  }
}

export default SignUp;
