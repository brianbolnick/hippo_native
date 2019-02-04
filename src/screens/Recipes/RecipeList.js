import React from "react";
import {
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from "react-native";
import axios from "axios";
import {
  EmptyTextTitle,
  EmptyTextSub,
  SectionTitle,
  CardsContainer,
  FiltersContainer,
  FilterIcon,
  DishTypeScroll
} from "./RecipeCardStyledComponents";
import RecipeCard from "./RecipeCard";
import { tempRecipes } from "./helper";
import { getDataFromAs, API_URL } from "utils";
import * as keys from "utils/constants";
import * as colors from "utils/Colors";
import SearchBar from "components/SearchBar";
import Icon from "components/Icon";
import FilterModal from "./FilterModal";

export default class RecipeList extends React.Component {
  state = {
    filteredRecipes: [],
    filteredSharedRecipes: [],
    recipes: [],
    sharedRecipes: [],
    loading: true,
    filtersSet: false,
    showFilterModal: false
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

  filterRecipesByText = (recipes, filter) => {
    return recipes.filter(recipe => {
      return recipe.title.toLowerCase().search(filter.toLowerCase()) >= 0;
    });
  };

  filterRecipesByAttribute = (recipes, filter, attr) => {
    return recipes.filter(recipe => {
      return recipe[attr].id == filter;
    });
  };

  handleSearchChange = text => {
    if (text.length < 3) {
      this.setState({
        filtersSet: false,
        filteredRecipes: [],
        filteredSharedRecipes: []
      });
    } else {
      const filteredRecipes = this.filterRecipesByText(
        [...this.state.recipes],
        text,
        "title"
      );
      const filteredSharedRecipes = this.filterRecipesByText(
        [...this.state.sharedRecipes],
        text,
        "title"
      );
      this.setState({
        filteredRecipes,
        filteredSharedRecipes,
        filtersSet: true
      });
    }
  };

  setModalVisible = visible => {
    this.setState({ showFilterModal: visible });
  };

  handleApplyFilters = filters => {
    let filteredRecipes = [...this.state.recipes];
    let filteredSharedRecipes = [...this.state.sharedRecipes];

    Object.keys(filters).forEach(filter => {
      if (filter) {
        filteredRecipes = this.filterRecipesByAttribute(
          filteredRecipes,
          filters[filter],
          filter
        );
        filteredSharedRecipes = this.filterRecipesByAttribute(
          filteredSharedRecipes,
          filters[filter],
          filter
        );
      }
    });
    this.setModalVisible(!this.state.showFilterModal);
    this.setState({ filteredSharedRecipes, filteredRecipes, filtersSet: true });
  };

  renderDishTypes = () => {
    const {
      filtersSet,
      recipes,
      filteredRecipes,
      sharedRecipes,
      filteredSharedRecipes
    } = this.state;
    const recipeMap = filtersSet ? filteredRecipes : recipes;
    const sharedRecipeMap = filtersSet ? filteredSharedRecipes : sharedRecipes;
    const categoryMap = {};

    recipeMap.forEach(recipe => {
      if (!categoryMap[recipe.dish_type.name]) {
        categoryMap[recipe.dish_type.name] = [recipe];
      } else {
        categoryMap[recipe.dish_type.name].push(recipe);
      }
    });

    return this.renderCategories(categoryMap);
  };

  renderCategories = categoryMap => {
    return Object.keys(categoryMap).map(category => {
      const dishMap = categoryMap[category].map((data, index) => (
        <RecipeCard
          data={data}
          key={
            data.id == 0 ? `0-${index}-${category}` : `${data.id}-${category}`
          }
          navigation={this.props.navigation}
        />
      ));

      return (
        <React.Fragment key={category}>
          <SectionTitle>{category}</SectionTitle>
          <DishTypeScroll horizontal showsHorizontalScrollIndicator={false}>
            {dishMap}
          </DishTypeScroll>
        </React.Fragment>
      );
    });
  };

  renderCards = (recipes, showTemp) => {
    const { navigation } = this.props;
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
    const recipeMap =
      recipes.length || this.state.filtersSet ? recipes : tempRecipes;
    return recipeMap.map((data, index) => (
      <RecipeCard
        data={data}
        key={data.id == 0 ? `0-${index}` : data.id}
        navigation={navigation}
      />
    ));
  };

  render() {
    const { navigation } = this.props;
    const {
      recipes,
      sharedRecipes,
      filteredRecipes,
      filteredSharedRecipes,
      loading,
      filtersSet,
      showFilterModal
    } = this.state;

    const recipeMap = filtersSet ? filteredRecipes : recipes;
    const sharedRecipeMap = filtersSet ? filteredSharedRecipes : sharedRecipes;

    const isBeta = recipeMap.length && recipeMap[0].user.is_beta;

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
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <FilterModal
              visible={showFilterModal}
              onRequestClose={filters => console.log("close", filters)}
              onApplyFilters={this.handleApplyFilters}
              onCancelRequest={() => {
                this.setModalVisible(false);
                this.setState({ filtersSet: false });
              }}
              filtersSet={filtersSet}
            />
            <FiltersContainer>
              <SearchBar
                onChange={this.handleSearchChange}
                placeholder="Search Recipes"
              />
              <FilterIcon
                name="filter"
                size={28}
                color={filtersSet ? colors.red : colors.mutedGray}
                onPress={() => this.setModalVisible(!showFilterModal)}
              />
            </FiltersContainer>
            {!recipes.length && (
              <View>
                <EmptyTextTitle>You don't have any recipes yet.</EmptyTextTitle>
                <EmptyTextSub>
                  Here are some samples until you create your own.
                </EmptyTextSub>
              </View>
            )}
            {!isBeta ? (
              this.renderDishTypes()
            ) : (
              <React.Fragment>
                <SectionTitle>Family Recipes</SectionTitle>
                <CardsContainer>
                  {this.renderCards(recipeMap, true)}
                </CardsContainer>

                <SectionTitle>Recipes Shared With Me</SectionTitle>
                <CardsContainer>
                  {this.renderCards(sharedRecipeMap, false)}
                </CardsContainer>
              </React.Fragment>
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}
