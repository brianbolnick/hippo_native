import React from "react";
import { ScrollView, Text, View } from "react-native";
import { EmptyTextTitle, EmptyTextSub } from "./RecipeCardStyledComponents";

import { tempRecipes } from "./helper";
import RecipeCard from "./RecipeCard";

const recipes = [];

export default ({ navigation }) => {
  const renderCards = () => {
    const recipeMap = recipes.length ? recipes : tempRecipes;
    return recipeMap.map(data => (
      <RecipeCard data={data} key={data.id} navigation={navigation} />
    ));
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {!recipes.length && (
          <View>
            <EmptyTextTitle>You don't have any recipes yet.</EmptyTextTitle>
            <EmptyTextSub>
              Here are some samples until you create your own.
            </EmptyTextSub>
          </View>
        )}
        {renderCards()}
      </ScrollView>
    </View>
  );
};
