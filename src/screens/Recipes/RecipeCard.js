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
import Button from "components/Button";

const RecipeCard = ({ data }) => {
  const { title, image_url, id, category, user } = data;
  return (
    <Card
      underlayColor="transparent"
      onPress={() => Linking.openURL("https://hungryhippo.app")}
    >
      <View style={{ borderRadius: 4 }}>
        <RecipeImage source={{ uri: image_url }} />
        <Content>
          <Title>{title}</Title>
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
