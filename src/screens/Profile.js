//import React from "react";
//import { View } from "react-native";
//import { Card, Text } from "react-native-elements";
//import Button from "components/Button";
//import { onSignOut } from "utils";

//export default ({ navigation }) => (
//<View style={{ paddingVertical: 60, paddingHorizontal: 32 }}>
//<Button
//label="SIGN OUT"
//onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
///>
//</View>
//);

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Linking
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import styled from "styled-components";
import { LinearGradient } from "expo";
import * as colors from "utils/Colors";
import Button from "components/Button";
import { onSignOut } from "utils";

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

export default ({ navigation }) => (
  <ScreenContainer behavior="padding" style={styles.container}>
    <LogoContainer>
      <StyledText>Coming Soon</StyledText>
      <StyledSubText>
        You'll shortly have access to more profile settings.
      </StyledSubText>
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
        </ButtonContainer>
      </Card>
    </FormContainer>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-around"
  }
});
