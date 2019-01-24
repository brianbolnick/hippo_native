import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, View, ScrollView } from "react-native";
import { addRecipe } from "utils/actions";
import Button from "components/Button";
import Icon from "components/Icon";
import Rating from "components/Rating";
import * as colors from "utils/Colors";
import {
  HeaderContainer,
  RecipeTitle,
  FamilyName,
  MetaContainer,
  CategoryContainer,
  Category,
  RatingContainer,
  SectionTitle,
  RecipeContent,
  Details,
  AuthorTitle,
  AuthorName,
  IngredientsContainer,
  Ingredient,
  IngredientWrap,
  StepsContainer,
  Step,
  StepWrap,
  StepNumber
} from "./ShowRecipeStyledComponents";

class ShowRecipe extends React.Component {
  componentDidMount = () => {
    const data = this.props.navigation.getParam("data", {});
    this.props.addRecipe(data);
  };

  renderIngredients = ingredients => {
    return (
      ingredients.length &&
      ingredients.map((ing, index) => {
        return (
          <IngredientWrap key={`ingredient|${index}`}>
            <Ingredient>{ing}</Ingredient>
          </IngredientWrap>
        );
      })
    );
  };

  renderSteps = steps => {
    return (
      steps.length &&
      steps.map((step, index) => {
        return (
          <StepWrap key={`step|${index}`}>
            <StepNumber>{index + 1}</StepNumber>
            <Step>{step}</Step>
          </StepWrap>
        );
      })
    );
  };

  render() {
    const { navigation, recipeData } = this.props;
    console.log("RENDER ---------------------------", recipeData);
    const data = recipeData.length
      ? recipeData
      : navigation.getParam("data", {});
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <HeaderContainer style={{ alignItems: "flex-start" }}>
          <Icon
            onPress={() => navigation.navigate("Recipes")}
            name="chevronLeft"
            size={40}
            color={colors.red}
          />
        </HeaderContainer>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 32
          }}
        >
          <FamilyName>{data.family.display_name}</FamilyName>
          <RecipeTitle>{data.title}</RecipeTitle>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{ uri: data.image_url }}
          />
          <RecipeContent>
            <MetaContainer>
              <CategoryContainer>
                <Icon name="tags" size={28} color={colors.black} />
                <Category>{data.category.name}</Category>
              </CategoryContainer>
              <RatingContainer>
                <Rating value={data.rating} />
              </RatingContainer>
            </MetaContainer>
            {data.notes && <Details>"{data.notes}"</Details>}
            <SectionTitle>Ingredients</SectionTitle>
            <IngredientsContainer>
              {this.renderIngredients(data.ingredients)}
            </IngredientsContainer>
            <SectionTitle>Directions</SectionTitle>
            <StepsContainer>{this.renderSteps(data.steps)}</StepsContainer>
          </RecipeContent>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state.recipes.recipeData);
  return { recipeData: state.recipes.recipeData };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addRecipe }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowRecipe);
