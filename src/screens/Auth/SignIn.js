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

class SignIn extends React.Component {
  state = { email: "", password: "", error: "", loading: false };

  handleSignIn = () => {
    this.setState({ loading: true });
    console.log("SUBMITTING", this.state);
    const data = {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };

    axios
      .post(`${API_URL}/sign_in`, data, config)
      .then(resp => {
        this.setState({ loading: false }, () => {
          console.log("RESP", resp);
          if (resp.error) {
            const message = handleNetworkErrors(500);
            this.setState({ loading: false, error: { message } });
          } else {
            if (resp.data.jwt) {
              onSignIn(resp.data);
              this.props.navigation.navigate("SignedIn");
            }
          }
        });
      })
      .catch(err => {
        console.log("ERR", err);
        const message = handleNetworkErrors(err);
        this.setState({
          loading: false,
          error: { message }
        });
      });
  };

  render() {
    const { error } = this.state;
    const { navigation } = this.props;
    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Login</SubHeader>
          <Header>Welcome Back!</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                label="Email"
                placeholder="Email Address"
                textContentType="emailAddress"
                onChangeText={text => this.setState({ email: text })}
              />
              <Input
                secureTextEntry
                textContentType="password"
                label="Password"
                placeholder="Password"
                onChangeText={text => this.setState({ password: text })}
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Sign In"
            loading={this.state.loading}
            onPress={() => this.handleSignIn()}
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

export default SignIn;
