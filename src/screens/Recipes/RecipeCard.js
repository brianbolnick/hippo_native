import React from "react";
import { View } from "react-native";
import {
  FooterText,
  Card,
  RecipeImage,
  Content,
  Title,
  MetaData,
  Footer
} from "./RecipeCardStyledComponents";
const PlaceholderImage = require("images/recipe-placeholder.png");

const RecipeCard = ({ data, navigation }) => {
  const { title, image_url, id, category, user } = data;
  const image = image_url ? { uri: image_url } : PlaceholderImage;
  return (
    <Card
      underlayColor="transparent"
      onPress={() => navigation.navigate("ShowRecipe", { data })}
    >
      <View style={{ borderRadius: 4 }}>
        <RecipeImage source={image} />
        <Content>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Title>
          <MetaData numberOfLines={1} ellipsizeMode="tail">
            {category.name.toUpperCase()}
          </MetaData>
        </Content>
        <Footer>
          <FooterText numberOfLines={1} ellipsizeMode="tail">
            {user.name}
          </FooterText>
        </Footer>
      </View>
    </Card>
  );
};

export default RecipeCard;
