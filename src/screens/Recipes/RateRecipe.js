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
import { LinearGradient } from "expo";
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
  state = { loading: false, error: "", ratingValid: false, rating: 0 };

  componentDidMount = () => {
    const { recipe } = this.props;
    if (recipe.recipeData.id === 0) {
      this.setState({
        error:
          "This is only a sample recipe and is for demonstrational purposes only."
      });
    }
  };

  isRatingValid = rating => {
    const regex = /^[0-5]{0,1}(\.\d{1,2})?$/;
    return rating && regex.test(rating);
  };

  handleRatingChange = text => {
    const { recipe } = this.props;
    const rating = text;

    if (recipe.recipeData.id !== 0) {
      if (this.isRatingValid(rating)) {
        this.setState({
          rating: parseInt(rating),
          error: "",
          ratingValid: true
        });
      } else {
        this.setState({
          error:
            rating.length <= 4
              ? "Rating must be a number between 0 and 5"
              : "Rating must have no more than 2 decimal places.",
          ratingValid: false
        });
      }
    }
  };

  handleFormSubmit = async () => {
    const { userId, familyId, authToken } = await getDataFromAs();
    const { rating } = this.state;

    const { recipeData } = this.props.recipe;
    const recipeId = recipeData.id;

    if (rating > 0) {
      const data = {
        rating: {
          user_id: userId,
          value: rating,
          recipe_id: recipeId
        }
      };

      axios
        .post(`${API_URL}/ratings`, data, {
          headers: { Authorization: `Bearer ${authToken}` }
        })
        .then(resp => {
          console.log("RESP", resp.data.data);
          this.props.updateRecipeRating(resp.data.data.value);
          this.setState({
            success: "Rating Saved Successfully!"
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: "Something went wrong. Please try again." });
        });
    }
  };

  render() {
    const { recipe, navigation } = this.props;
    const { error, rating, success } = this.state;

    return (
      <ScreenContainer behavior="padding" style={styles.container}>
        <LogoContainer>
          <StyledText>Rate Recipe</StyledText>
          <StyledSubText>Enter the new rating below</StyledSubText>
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}

          <RatingContainer>
            <Rating value={rating} large />
          </RatingContainer>
        </LogoContainer>
        <FormContainer>
          <Card>
            <Input
              onChangeText={this.handleRatingChange}
              placeholder="0 - 5"
              large
              keyboardType="numeric"
            />

            <ButtonContainer>
              <StyledButton
                label="Save Rating"
                disabled={
                  recipe.recipeData.id === 0 ||
                  rating === 0 ||
                  this.state.error.length > 0
                }
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
