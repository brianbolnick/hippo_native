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
  ErrorText
} from "./NewRecipe/NewRecipeStyledComponents";

const config = { headers: {} };

class NewRecipeEntry extends React.Component {
  state = {
    name: "",
    error: "",
    invalidInput: false,
    loading: false
  };

  render() {
    const { navigation } = this.props;
    const { error, name, email, invalidInput } = this.state;

    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Create An Recipe</SubHeader>
          <Header>What Is It?</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                onChangeText={text => this.setState({ title: text })}
                label="Title"
                placeholder="Recipe Name"
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            label="Next"
            disabled={invalidInput}
            onPress={() => {
              console.log("HERE");
              navigation.navigate("Step1", {
                name
              });
            }}
          />
        </ButtonContainer>
      </ScreenContainer>
    );
  }
}

export default NewRecipeEntry;
