import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, Image, View, ScrollView } from "react-native";
import math from "mathjs";
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
import useRecipeQuery from "./hooks/useRecipeQuery";
const PlaceholderImage = require("images/recipe-placeholder.png");

const ShowRecipe = ({ navigation }) => {
  const navData = navigation.getParam("data", {});
  const { data, error, loading } = useRecipeQuery({ recipeId: navData.id });

  if (loading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  const renderIngredients = () =>
    data.rawIngredients &&
    data.rawIngredients.map((ing, index) => (
      <IngredientWrap key={`ingredient|${ing}`}>
        <Ingredient>{ing}</Ingredient>
      </IngredientWrap>
    ));

  const renderSteps = () => {
    return (
      data.steps.length &&
      data.steps.map((step, index) => {
        return (
          <StepWrap key={`step|${index}`}>
            <StepNumber>{index + 1}</StepNumber>
            <Step>{step}</Step>
          </StepWrap>
        );
      })
    );
  };

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
        <FamilyName>{data.family.displayName || ""}</FamilyName>
        <RecipeTitle>{data.title}</RecipeTitle>
        <Image
          style={{ width: "100%", height: 300 }}
          source={data.imageUrl ? { uri: data.imageUrl } : PlaceholderImage}
        />
        <RecipeContent>
          <MetaContainer>
            <CategoryContainer>
              <Icon name="tags" size={28} color={colors.black} />
              <TypeContainer>
                <Category>{data.category.name || ""}</Category>
                <DishType>{data.dishType.name || ""}</DishType>
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

export default ShowRecipe;
