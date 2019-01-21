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

class SetPassword extends React.Component {
  state = {
    password: "",
    passwordConfirmation: "",
    email: "",
    name: "",
    error: "",
    invalidInput: true
  };

  componentDidMount = () => {
    const name = this.props.navigation.getParam("name", "");
    const email = this.props.navigation.getParam("email", "");
    this.setState({ name, email });
  };

  verifyPassword = () => {
    const { password, passwordConfirmation } = this.state;
    if (password.length < 8) {
      this.setState({
        error: { message: "Password must be at least 8 characters" },
        invalidInput: true
      });
    } else if (!passwordConfirmation || password !== passwordConfirmation) {
      this.setState({
        error: { message: "Passwords must match." },
        invalidInput: true
      });
    } else {
      this.setState({ error: { message: "" }, invalidInput: false });
    }
  };

  render() {
    const { navigation } = this.props;
    const { error, name, email, invalidInput } = this.state;

    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Create An Account</SubHeader>
          <Header>Set a Password</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                secureTextEntry
                textContentType="password"
                label="Password"
                placeholder="Password"
                onChangeText={text => this.setState({ password: text })}
              />
              <Input
                secureTextEntry
                textContentType="password"
                label="Password Confirmation"
                placeholder="Confirm Password"
                onBlur={this.verifyPassword}
                onChangeText={text =>
                  this.setState({ passwordConfirmation: text })
                }
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Next"
            disabled={invalidInput}
            onPress={() =>
              navigation.navigate("FamilyCodeIntro", {
                name,
                email,
                password: this.state.password,
                passwordConfirmation: this.state.passwordConfirmation
              })
            }
          />
          <Button
            label="Go Back"
            tertiary
            onPress={() => navigation.navigate("SignUp")}
          />
        </ButtonContainer>
      </ScreenContainer>
    );
  }
}

export default SetPassword;
