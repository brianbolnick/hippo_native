import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Linking,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { FormLabel, FormInput } from "react-native-elements";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import * as colors from "utils/Colors";
import Button from "components/Button";
import { onSignOut, getDataFromAs, API_URL } from "utils";

const StyledText = styled.Text`
  font-size: 32px;
  color: ${colors.black};
  font-weight: 800;
`;

const StyledSubText = styled.Text`
  font-size: 20px;
  color: ${colors.darkGray};
  font-weight: 500;
  text-align: center;
  padding-horizontal: 16;
`;

const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40;
`;

const ScreenContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

const FormContainer = styled.View``;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 10;
`;

const Card = styled.View`
  width: 325;
  margin-top: 40;
`;

const StyledButton = styled(Button)`
  margin-vertical: 16;
`;

class Profile extends React.Component {
  state = { user: [], loading: true };

  getUser = (userId, authToken) => {
    return axios.get(`${API_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
  };

  async componentDidMount() {
    const { authToken } = await getDataFromAs();
    axios
      .get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      .then(({ data }) => {
        const user = data.data;
        this.setState({ user, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "Something went wrong", loading: false });
      });
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.state;
    console.log("USER", user);
    return !user.name ? (
      <ScreenContainer behavior="padding" style={styles.container}>
        <ActivityIndicator size="large" color={colors.black} />

        <ButtonContainer>
          <StyledButton
            label="SIGN OUT"
            onPress={() =>
              onSignOut().then(() => navigation.navigate("SignedOut"))
            }
          />
        </ButtonContainer>
      </ScreenContainer>
    ) : (
      <ScreenContainer behavior="padding" style={styles.container}>
        <LogoContainer>
          <StyledText>{user.name}</StyledText>
          <StyledSubText>{user.family.display_name}</StyledSubText>
        </LogoContainer>
        <FormContainer>
          <Card>
            <ButtonContainer>
              <StyledButton
                label="SIGN OUT"
                onPress={() =>
                  onSignOut().then(() => navigation.navigate("SignedOut"))
                }
              />
              <Button
                label="Contact Support"
                tertiary
                onPress={() =>
                  Linking.openURL(
                    "mailto:brianbolnick+hippo@gmail.com?subject=Hungry Hippo Support Request"
                  )
                }
              />
            </ButtonContainer>
          </Card>
        </FormContainer>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Profile;
