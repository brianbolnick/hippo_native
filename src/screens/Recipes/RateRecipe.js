import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Linking
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { connect } from "react-redux";
import styled from "styled-components";
import { LinearGradient } from "expo";
import * as colors from "utils/Colors";
import Button from "components/Button";

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

const RateRecipe = ({ recipeData, navigation }) => {
  console.log(recipeData);
  return (
    <ScreenContainer behavior="padding" style={styles.container}>
      <LogoContainer>
        <StyledText>Rate Recipe</StyledText>
        <StyledSubText>Enter the new rating below</StyledSubText>
      </LogoContainer>
      <FormContainer>
        <Card>
          <ButtonContainer>
            <StyledButton
              label="Save Rating"
              onPress={() => Linking.openURL("https://hungryhippo.app")}
            />
          </ButtonContainer>
        </Card>
      </FormContainer>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-around"
  }
});

const mapStateToProps = state => {
  console.log(state);
  return { recipe: state.recipeData };
};

export default connect(mapStateToProps)(RateRecipe);
