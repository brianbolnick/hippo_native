//import React from "react";
//import { FormLabel, FormInput } from "react-native-elements";
//import Input from 'components/Input'
//import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
//import { onSignIn } from "utils/auth";
//import Button from 'components/Button';
//import {ButtonContainer, ScreenContainer, Card, HeaderContainer, Header ,SubHeader} from './AuthStyledComponents';

//export default ({ navigation }) => (
//<ScreenContainer behavior="padding">
//<HeaderContainer>
//<SubHeader>Create An Account</SubHeader>
//<Header>Join A Family</Header>
//<KeyboardAvoidingView>
//<Card>
//<Input label="Family Join Code" placeholder="Family Code" />
//</Card>
//</KeyboardAvoidingView>
//</HeaderContainer>

//<ButtonContainer>
//<Button
//label="Let's Go!"
//onPress={() => onSignIn().then(() => navigation.navigate("SignedIn"))}
///>
//<Button
//label="Go Back"
//tertiary
//onPress={() => navigation.navigate("FamilyCodeIntro")}
///>
//</ButtonContainer>
//</ScreenContainer>
//);
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
  SubHeader,
  ErrorText
} from "./AuthStyledComponents";
import { getRecipeArgs } from "./helper";
import axios from "axios";
import { API_URL, handleNetworkErrors } from "utils/constants";

const config = { headers: {} };

class FamilyCodeExisting extends React.Component {
  state = {
    email: "",
    name: "",
    joinCode: "",
    password: "",
    passwordConfirmation: "",
    error: "",
    invalidInput: true,
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
    this.setState({ name, email, password, passwordConfirmation });
  };

  verifyCode = () => {
    const { joinCode } = this.state;
    if (!joinCode) {
      this.setState({
        error: {
          message: "Please enter a join code.",
          invalidInput: true
        }
      });
      return;
    }

    axios
      .get(`${API_URL}/family/code/${joinCode.toLowerCase()}`, {}, config)
      .then(resp => {
        console.log(resp);
        if (resp.status !== 200) {
          this.setState({
            error: {
              message: "That join does not exist.",
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
            message: "That join code does not exist.",
            invalidInput: true
          }
        });
      });
  };

  handleSignUp = () => {
    this.setState({ loading: true });
    const data = {
      user: {
        name: this.state.name,
        email: this.state.email.toLowerCase(),
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        join_code: this.state.joinCode.toLowerCase()
      }
    };

    axios
      .post(`${API_URL}/sign_up`, data, config)
      .then(resp => {
        if (resp.error || !resp.data.jwt) {
          const message = handleNetworkErrors(500);
          this.setState({ loading: false, error: { message } });
        } else {
          onSignIn(resp.data);
          this.props.navigation.navigate("SignedIn");
          //const jwt = resp.data.jwt;
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

          //console.log("new data", data);
          //axios
          //.post(`${API_URL}/recipes`, data, {
          //headers: { Authorization: `Bearer ${resp.data.jwt}` }
          //})
          //.then(resp => {
          //this.props.navigation.navigate("SignedIn");
          //})
          //.catch(err => {
          //console.log("2", err);
          //const message = handleNetworkErrors(err);
          //this.setState({ loading: false, error: { message } });
          //});
        }
      })
      .catch(err => {
        console.log("1", err);
        const message = handleNetworkErrors(err);
        this.setState({ loading: false, error: { message } });
      });
  };

  render() {
    const { navigation } = this.props;
    const { invalidInput, error, joinCode } = this.state;
    return (
      <ScreenContainer behavior="padding">
        <HeaderContainer>
          <SubHeader>Create An Account</SubHeader>
          <Header>Join A Family</Header>
          {error.message && <ErrorText>{error.message}</ErrorText>}
          <KeyboardAvoidingView>
            <Card>
              <Input
                onChangeText={text => this.setState({ joinCode: text })}
                label="Family Join Code"
                placeholder="Family Code"
                onBlur={this.verifyCode}
              />
            </Card>
          </KeyboardAvoidingView>
        </HeaderContainer>

        <ButtonContainer>
          <Button
            disabled={invalidInput}
            label="Let's Go!"
            onPress={this.handleSignUp}
          />
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

export default FamilyCodeExisting;
