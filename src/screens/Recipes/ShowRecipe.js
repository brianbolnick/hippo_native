import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, Image, View, ScrollView } from "react-native";
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

const ShowRecipe = ({ navigation, recipeData }) => {
  const navData = navigation.getParam("data", {});

  const [ingredientsList, setIngredientsList] = useState(
    navData.raw_ingredients
  );

  const renderIngredients = () =>
    ingredientsList.map((ing, index) => (
      <IngredientWrap key={`ingredient|${ing}`}>
        <Ingredient>{ing}</Ingredient>
      </IngredientWrap>
    ));

  const renderSteps = steps => {
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
            {/*
              <ServingsForm
                currentServings={data.servings}
                onChange={this.handleServingsChange}
              />
						*/}
          </ServingsContainer>
          <IngredientsContainer>{renderIngredients()}</IngredientsContainer>
          <SectionTitle>Directions</SectionTitle>
          <StepsContainer>{renderSteps(data.steps)}</StepsContainer>
        </RecipeContent>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return { recipeData: state.recipes.recipeData || {} };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addRecipe }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowRecipe);
