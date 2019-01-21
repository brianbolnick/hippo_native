import React from "react";
import { FormLabel, FormInput } from "react-native-elements";
import Input from "components/Input";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { onSignIn } from "utils/auth";
import Button from "components/Button";
import {
  ButtonContainer,
  ScreenContainer,
  Card,
  HeaderContainer,
  Header,
  SubHeader
} from "./AuthStyledComponents";
import { getRecipeArgs } from "./helper";

class FamilyCodeNew extends React.Component {
  state = {
    email: "",
    name: "",
    familyName: "",
    joinCode: "",
    password: "",
    passwordConfirmation: "",
    error: "",
    loading: false
  };

  componentDidMount = () => {
    const name = this.props.navigation.getParam("name", "");
    const email = this.props.navigation.getParam("email", "");
    const password = this.props.navigation.getParam("password", "");
    const passwordConfirmation = this.props.navigation.getParam(
      "passwordConfirmation",
      ""
    );
    console.log(password);
    this.setState({ name, email, password, passwordConfirmation });
  };

  handleSignUp = () => {
    this.setState({ loading: true });
    console.log("SUBMITTING", this.state);
    const data = {
      user: {
        name: this.state.name,
        email: this.state.email.toLowerCase(),
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        join_code: this.state.joinCode.toLowerCase(),
        family_name: this.state.familyName
      }
    };

    console.log("DATA", data);

    //axios
    //.post(`${API_URL}/sign_up`, data, config)
    //.then(resp => {
    //this.setState({ loading: false }, () => {
    //console.log("RESP", resp);
    //if (resp.error) {
    //const message = handleNetworkErrors(500);
    //this.setState({ loading: false, error: { message } });
    //} else {
    //if (resp.data.jwt) {
    //const jwt = jwtDecode(resp.data.jwt);
    //onSignIn(resp.data);
    //const sub = JSON.parse(jwt.sub);
    //const familyId = sub.family_id;
    //const userId = sub.id;
    //const data = new FormData();
    //const recipeData = getRecipeArgs(familyId, userId);
    //Object.keys(recipeData).forEach(obj => {
    //const val = recipeData[obj];
    //if (val instanceof Array) {
    //data.append(obj, JSON.stringify(val));
    //} else {
    //data.append(obj, val);
    //}
    //});

    //axios
    //.post(`${API_URL}/recipes`, data, {
    //headers: { Authorization: `Bearer ${resp.data.jwt}` }
    //})
    //.then(resp => {
    //this.props.navigation.navigate("SignedIn");
    //})
    //.catch(err => {
    //console.log(err);
    //const message = handleNetworkErrors(err);
    //this.setState({ loading: false, error: { message } });
    //});
    //}
    //})
    //}
    //})
    //.catch(err => {
    //console.log("ERR", err);
    //const message = handleNetworkErrors(err);
    //this.setState({
    //loading: false,
    //error: { message }
    //});
    //});
  };

  render() {
    const { navigation } = this.props;
    const { error, familyName, joinCode } = this.state;
    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Create An Account</SubHeader>
          <Header>Create A Family</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                onChangeText={text => this.setState({ familyName: text })}
                label="Family Name"
                placeholder="Family Display Name"
              />
              <Input
                onChangeText={text => this.setState({ joinCode: text })}
                label="Join Code"
                placeholder="Unique Join Code"
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button label="Let's Go!" onPress={this.handleSignUp} />
          <Button
            label="Go Back"
            tertiary
            onPress={() => navigation.navigate("FamilyCodeIntro")}
          />
        </ButtonContainer>
      </ScreenContainer>
    );
  }
}

export default FamilyCodeNew;
