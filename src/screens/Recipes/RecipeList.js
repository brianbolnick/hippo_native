import React from "react";
import { ScrollView, Text, View } from "react-native";
import { EmptyTextTitle, EmptyTextSub } from "./RecipeCardStyledComponents";
import RecipeCard from "./RecipeCard";
import { tempRecipes } from "./helper";
import { getUserId, userId, familyId } from "utils";

//const recipes = [];

export default class RecipeList extends React.Component {
  state = { recipes: [], sharedRecipes: [] };

  async componentDidMount() {
    //const uid = getUserId();
    await getUserId()
      .then(res =>
        this.setState({ userId: res }, () => console.log(this.state))
      )
      .catch(err => alert("An error occurred"));

    //console.log("user", uid);
    //await console.log("ID", userId);
    //await console.log("FAMID", familyId);
  }

  render() {
    const { navigation } = this.props;
    const { recipes } = this.state;

    const renderCards = recipes => {
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
          {renderCards(recipes)}
        </ScrollView>
      </View>
    );
  }
}
