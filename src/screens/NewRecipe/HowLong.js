import React from "react";
import styled from "styled-components";
import { KeyboardAvoidingView } from "react-native";
import { API_URL, handleNetworkErrors, onSignIn } from "utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Button from "components/Button";
import Input from "components/Input";
import {
  ButtonContainer,
  ScreenContainer,
  Card,
  HeaderContainer,
  Header,
  SubHeader,
  ErrorText,
  NavigationView,
  CancelIcon
} from "./NewRecipeStyledComponents";

const config = { headers: {} };

class HowLong extends React.Component {
  state = {
    name: "",
    error: "",
    invalidInput: false,
    loading: false
  };

  componentDidMount = () => {
    const name = this.props.navigation.getParam("name", "");
    this.setState({ name });
  };

  render() {
    const { navigation } = this.props;
    const { error, calories, servings, name, invalidInput } = this.state;

    return (
      <ScreenContainer behavior="padding" style={{ position: "relative" }}>
        <HeaderContainer>
          <SubHeader>Create An Recipe</SubHeader>
          <Header>How Long?</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                onChangeText={text => this.setState({ calories: text })}
                label="Calories"
                placeholder="Calories"
              />
              <Input
                onChangeText={text => this.setState({ servings: text })}
                label="Servings"
                placeholder="Serving Size"
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Next"
            disabled={invalidInput}
            onPress={() =>
              navigation.navigate("WhatsInIt", {
                calories,
                servings,
                name
              })
            }
          />
          <Button
            label="Cancel"
            tertiary
            onPress={() => navigation.navigate("SignedIn")}
          />
        </ButtonContainer>
      </ScreenContainer>
    );
  }
}

export default HowLong;
