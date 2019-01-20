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

export default ({ navigation }) => (
  <View style={{ flex: 1, paddingTop: 50 }}>
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Nothing Here yet...</Text>
    </ScrollView>
  </View>
);
