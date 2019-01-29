import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, View, ScrollView } from "react-native";
import math from "mathjs";
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
  StepNumber,
  ServingsContainer,
  ServingsGroup,
  ServingSize,
  ChangeServingGroup,
  ServingLabel,
  TypeContainer,
  DishType
} from "./ShowRecipeStyledComponents";
import ServingsForm from "./ServingsForm";
const PlaceholderImage = require("images/recipe-placeholder.png");

class ShowRecipe extends React.Component {
  state = { ingredientsList: [] };
  componentDidMount = () => {
    const data = this.props.navigation.getParam("data", {});
    this.setState({ ingredientsList: data.ingredients });
    this.props.addRecipe(data);
  };

  renderIngredients = ingredients => {
    return (
      ingredients.length &&
      ingredients.map((ing, index) => {
        return (
          <IngredientWrap key={`ingredient|${index}`}>
            <Ingredient>{`${ing.quantity} ${ing.measurement} ${
              ing.name
            }`}</Ingredient>
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

  getQuantityType = quantity => {
    if (math.fraction(quantity).d === 1) return "number";
    return "fraction";
  };

  calculateQuantity = (quantity, serving, type) => {
    switch (type) {
      case "fraction": {
        const fraction = math.fraction(quantity);
        const value = math.multiply(fraction, serving);
        return this.convertImproperFraction(value);
      }
      default:
        return quantity * serving;
    }
  };

  updateIngredients = (ingredients, servings) => {
    return (
      ingredients.length &&
      ingredients.map(ing => {
        const type = this.getQuantityType(ing.quantity);
        const quantity = this.calculateQuantity(ing.quantity, servings, type);
        return {
          ...ing,
          quantity
        };
      })
    );
  };

  convertImproperFraction = fraction => {
    const numerator = fraction.n;
    const denominator = fraction.d;

    if (numerator % denominator === 0) {
      return numerator / denominator;
    }

    const mix = Math.floor(numerator / denominator);
    const newNumerator = numerator % denominator;
    return `${this.displayMix(mix)}${newNumerator}/${denominator}`;
  };

  displayMix = mix => {
    if (mix) return `${mix} `;
    return "";
  };

  handleServingsChange = servings => {
    const ingredientsList = this.updateIngredients(
      [...this.props.recipeData.ingredients],
      servings
    );
    this.setState({ ingredientsList });
  };

  render() {
    const { navigation, recipeData } = this.props;
    const { ingredientsList } = this.state;
    const data =
      Object.keys(recipeData).length > 0
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
            source={data.image_url ? { uri: data.image_url } : PlaceholderImage}
          />
          <RecipeContent>
            <MetaContainer>
              <CategoryContainer>
                <Icon name="tags" size={28} color={colors.black} />
                <TypeContainer>
                  <Category>{data.category.name}</Category>
                  <DishType>{data.dish_type.name}</DishType>
                </TypeContainer>
              </CategoryContainer>
              <RatingContainer>
                <Rating value={data.rating} />
              </RatingContainer>
            </MetaContainer>
            {data.notes && <Details>"{data.notes}"</Details>}
            <ServingsContainer>
              <SectionTitle>Ingredients</SectionTitle>
              <ServingsForm
                currentServings={data.servings}
                onChange={this.handleServingsChange}
              />
            </ServingsContainer>
            <IngredientsContainer>
              {this.renderIngredients(ingredientsList)}
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
  return { recipeData: state.recipes.recipeData || {} };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addRecipe }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowRecipe);
