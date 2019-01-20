import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import {
  FooterText,
  Card,
  RecipeImage,
  Content,
  Title,
  MetaData,
  Footer
} from "./RecipeCardStyledComponents";

const RecipeCard = ({ data, navigation }) => {
  const { title, image_url, id, category, user } = data;
  return (
    <Card
      underlayColor="transparent"
      onPress={() => navigation.navigate("ShowRecipe", { data })}
    >
      <View style={{ borderRadius: 4 }}>
        <RecipeImage source={{ uri: image_url }} />
        <Content>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Title>
          <MetaData>{category.name.toUpperCase()}</MetaData>
        </Content>
        <Footer>
          <FooterText>{user.name}</FooterText>
        </Footer>
      </View>
    </Card>
  );
};

export default RecipeCard;
