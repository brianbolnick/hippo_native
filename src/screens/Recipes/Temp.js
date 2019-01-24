import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text
} from "react-native";
import * as colors from "utils/Colors";
import { addRecipe } from "utils/actions";
import Button from "components/Button";
import Icon from "components/Icon";

const HeaderContainer = styled.View`
  height: 48;
`;

const RecipeTitle = styled.Text`
  color: ${colors.black};
  font-weight: 900;
  font-size: 32px;
  align-self: flex-start;
  padding-left: 16;
  margin-bottom: 16;
`;

const RecipeCategory = styled.Text`
  color: ${colors.mutedGray};
  font-size: 24px;
  font-weight: 600;
  align-self: flex-start;
  padding-left: 16;
`;

const Temp = ({ navigation, data }) => {
  console.log(data);
  return (
    <View style={{ flex: 1, paddingVertical: 50 }}>
      <HeaderContainer style={{ alignItems: "flex-start" }}>
        <Icon
          onPress={() => navigation.navigate("Recipes")}
          name="chevronLeft"
          size={32}
          color={colors.red}
        />
      </HeaderContainer>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <RecipeCategory>{data.category.name}</RecipeCategory>
        <RecipeTitle>{data.title}</RecipeTitle>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: data.image_url }}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const { recipes } = state;
  return { data: recipes.recipeData };
};

export default connect(mapStateToProps)(Temp);
