import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Linking
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import * as colors from "utils/Colors";
import { updateRecipeRating } from "utils/actions";
import Button from "components/Button";
import Input from "components/Input";
import Rating from "components/Rating";
import { getDataFromAs, API_URL } from "utils";

const Error = styled.Text`
  color: ${colors.red};
  font-size: 16;
  margin-vertical: 16;
  text-align: center;
`;

const Success = styled.Text`
  color: ${colors.green};
  font-size: 24;
  margin-vertical: 16;
  text-align: center;
`;

const RatingContainer = styled.View`
  margin-vertical: 16;
`;

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

class RateRecipe extends React.Component {
  state = {
    loading: false,
    error: "",
    joinCodeValid: false,
    familyName: "",
    sharedFamilyId: ""
  };

  componentDidMount = () => {
    const { recipe } = this.props;
    if (recipe.recipeData.id === 0) {
      this.setState({
        error:
          "This is only a sample recipe and is for demonstrational purposes only."
      });
    }
  };

  onCodeFieldChange = async text => {
    const { authToken } = await getDataFromAs();
    const code = text;

    const { recipe } = this.props;
    if (code && code.length >= 3 && recipe.recipeData.id !== 0) {
      this.setState({ loading: true, joinCode: code }, () => {
        axios
          .get(`${API_URL}/family/code/${code}`, {
            headers: { Authorization: `Bearer ${authToken}` }
          })
          .then(resp => {
            const joinCodeValid = resp.status === 200;
            const familyName = resp.data.data && resp.data.data.display_name;
            const sharedFamilyId = resp.data.data && resp.data.data.id;
            this.setState({
              loading: false,
              joinCodeValid,
              familyName,
              sharedFamilyId,
              error: !joinCodeValid ? "Please enter a valid join code." : ""
            });
          })
          .catch(err => {
            this.setState({
              joinCodeValid: false,
              loading: false,
              familyName: "",
              error: "Please enter a valid join code."
            });
          });
      });
    }
  };

  handleFormSubmit = async () => {
    const { userId, familyId, authToken } = await getDataFromAs();

    const data = {
      shared_recipe: {
        user_id: userId,
        family_id: this.state.sharedFamilyId,
        recipe_id: this.props.recipeId
      }
    };

    axios
      .post(`${API_URL}/shared_recipes`, data, {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      .then(resp => {
        this.setState({ success: "Recipe shared successfully!" });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "There was a problem sharing this recipe." });
      });
  };

  render() {
    const { recipe, navigation } = this.props;
    const { error, joinCodeValid, success } = this.state;

    return (
      <ScreenContainer behavior="padding" style={styles.container}>
        <LogoContainer>
          <StyledText>Share Recipe</StyledText>
          <StyledSubText>
            Enter the join code of the family you would like to share with.
          </StyledSubText>
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
        </LogoContainer>
        <FormContainer>
          <Card>
            <Input
              onChangeText={this.onCodeFieldChange}
              placeholder="Family Join Code"
            />

            <ButtonContainer>
              <StyledButton
                label="Share!"
                disabled={!joinCodeValid || recipe.recipeData.id === 0}
                onPress={this.handleFormSubmit}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateRecipeRating }, dispatch);

const mapStateToProps = state => {
  return { recipe: state.recipes };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateRecipe);
