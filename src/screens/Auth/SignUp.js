import React from "react";
import styled from "styled-components";
import { KeyboardAvoidingView } from "react-native";
import { API_URL, handleNetworkErrors, onSignIn } from "utils";
import axios from "axios";
import Button from "components/Button";
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
  state = {
    email: "",
    name: "",
    error: "",
    invalidInput: true,
    loading: false
  };

  verifyEmail = () => {
    const { email } = this.state;
    var re = /\S+@\S+\.\S+/;
    if (!email || re.test(email) === false) {
      this.setState({
        error: {
          message: "Please enter a valid email address.",
          invalidInput: true
        }
      });
      return;
    }

    axios
      .get(`${API_URL}/check_email/${email}`, {}, config)
      .then(resp => {
        if (resp.status !== 200) {
          this.setState({
            error: {
              message: "That email has already been taken.",
              invalidInput: true
            }
          });
        } else {
          this.setState({ error: { message: "" }, invalidInput: false });
        }
      })
      .catch(err => {
        console.log("ERRORRRR", err);
        this.setState({
          error: {
            message: "That email has already been taken.",
            invalidInput: true
          }
        });
      });
  };

  render() {
    const { navigation } = this.props;
    const { error, name, email, invalidInput } = this.state;

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
                onBlur={this.verifyEmail}
                placeholder="Email Address"
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Next"
            disabled={invalidInput}
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
