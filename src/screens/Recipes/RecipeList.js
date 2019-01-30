import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import axios from "axios";
import {
  EmptyTextTitle,
  EmptyTextSub,
  SectionTitle,
  CardsContainer
} from "./RecipeCardStyledComponents";
import RecipeCard from "./RecipeCard";
import { tempRecipes } from "./helper";
import { getDataFromAs, API_URL } from "utils";
import * as keys from "utils/constants";
import * as colors from "utils/Colors";
import SearchBar from "components/SearchBar";

export default class RecipeList extends React.Component {
  state = {
    filteredRecipes: [],
    filteredSharedRecipes: [],
    recipes: [],
    sharedRecipes: [],
    loading: true
  };

  getRecipes = (userId, familyId, authToken, recipeType) => {
    return axios.get(`${API_URL}/family/${familyId}/${recipeType}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
  };

  async componentDidMount() {
    const { userId, familyId, authToken } = await getDataFromAs();

    axios
      .all([
        this.getRecipes(userId, familyId, authToken, "recipes"),
        this.getRecipes(userId, familyId, authToken, "shared_recipes")
      ])
      .then(
        axios.spread((recipeData, sharedRecipeData) => {
          const recipes = recipeData.data.data;
          const sharedRecipes = sharedRecipeData.data.data;
          this.setState({ recipes, sharedRecipes, loading: false });
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: "Something went wrong", loading: false });
      });
  }

  filterRecipes = (recipes, text) => {
    return recipes.filter(recipe => {
      return recipe.title.toLowerCase().search(text.toLowerCase()) >= 0;
    });
  };

  handleSearchChange = text => {
    if (text.length <= 3) {
      this.setState({ filteredRecipes: [], filteredSharedRecipes: [] });
    } else {
      const filteredRecipes = this.filterRecipes([...this.state.recipes], text);
      const filteredSharedRecipes = this.filterRecipes(
        [...this.state.sharedRecipes],
        text
      );
      console.log("norm", filteredRecipes);
      console.log("shared", filteredSharedRecipes);
      this.setState({ filteredRecipes, filteredSharedRecipes });
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      recipes,
      sharedRecipes,
      filteredRecipes,
      filteredSharedRecipes,
      loading
    } = this.state;

    const renderCards = (recipes, showTemp) => {
      if (!showTemp) {
        return (
          recipes &&
          recipes.map((data, index) => (
            <RecipeCard
              data={data}
              key={data.id == 0 ? `0-${index}` : data.id}
              navigation={navigation}
            />
          ))
        );
      }
      const recipeMap = recipes.length ? recipes : tempRecipes;
      return recipeMap.map((data, index) => (
        <RecipeCard
          data={data}
          key={data.id == 0 ? `0-${index}` : data.id}
          navigation={navigation}
        />
      ));
    };

    const recipeMap = filteredRecipes.length ? filteredRecipes : recipes;
    const sharedRecipeMap = filteredSharedRecipes.length
      ? filteredSharedRecipes
      : sharedRecipes;

    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        {loading ? (
          <View
            style={{
              alignItems: "center",
              marginTop: 200,
              justifyContent: "center"
            }}
          >
            <ActivityIndicator size="large" color={colors.black} />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <SearchBar
              onChange={this.handleSearchChange}
              placeholder="Search Recipes"
            />
            {!recipes.length && (
              <View>
                <EmptyTextTitle>You don't have any recipes yet.</EmptyTextTitle>
                <EmptyTextSub>
                  Here are some samples until you create your own.
                </EmptyTextSub>
              </View>
            )}
            <SectionTitle>Family Recipes</SectionTitle>
            <CardsContainer>{renderCards(recipeMap, true)}</CardsContainer>
            <SectionTitle>Recipes Shared With Me</SectionTitle>
            <CardsContainer>
              {renderCards(sharedRecipeMap, false)}
            </CardsContainer>
          </ScrollView>
        )}
      </View>
    );
  }
}
