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
import RecipeCard from "./RecipeCard";

const images = [
  {
    user: {
      name: "Brian Bolnick",
      id: 1
    },
    title: "Pizza Margherita",
    steps: ["Cook Food", "Eat Food"],
    servings: 4,
    prep_time: "5 Mins",
    original_family_id: 1,
    notes: "So good!",
    is_public: false,
    ingredients: ["Salt", "Pepper"],
    image_url:
      "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
    id: 2,
    family: {
      id: 1,
      display_name: "Brian Bolnick Family"
    },
    cook_time: "1 Hour",
    category: {
      name: "Italian",
      id: 1
    },
    calories: "343",
    rating: 3.4
  },
  {
    user: {
      name: "Brian Bolnick",
      id: 1
    },
    title: "Pizza Margherita",
    steps: ["Cook Food", "Eat Food"],
    servings: 4,
    prep_time: "5 Mins",
    original_family_id: 1,
    notes: "So good!",
    is_public: false,
    ingredients: ["Salt", "Pepper"],
    image_url:
      "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
    id: 3,
    family: {
      id: 1,
      display_name: "Brian Bolnick Family"
    },
    cook_time: "1 Hour",
    category: {
      name: "Italian",
      id: 1
    },
    calories: "343",
    rating: 3.4
  },
  {
    user: {
      name: "Brian Bolnick",
      id: 1
    },
    title: "Pizza Margherita",
    steps: ["Cook Food", "Eat Food"],
    servings: 4,
    prep_time: "5 Mins",
    original_family_id: 1,
    notes: "So good!",
    is_public: false,
    ingredients: ["Salt", "Pepper"],
    image_url:
      "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
    id: 4,
    family: {
      id: 1,
      display_name: "Brian Bolnick Family"
    },
    cook_time: "1 Hour",
    category: {
      name: "Italian",
      id: 1
    },
    calories: "343",
    rating: 3.4
  },
  {
    user: {
      name: "Brian Bolnick",
      id: 1
    },
    title: "Pizza Margherita",
    steps: ["Cook Food", "Eat Food"],
    servings: 4,
    prep_time: "5 Mins",
    original_family_id: 1,
    notes: "So good!",
    is_public: false,
    ingredients: ["Salt", "Pepper"],
    image_url:
      "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
    id: 1,
    family: {
      id: 1,
      display_name: "Brian Bolnick Family"
    },
    cook_time: "1 Hour",
    category: {
      name: "Italian",
      id: 1
    },
    calories: "343",
    rating: 3.4
  }
];

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
      {images.map(data => (
        <RecipeCard data={data} key={data.id} />
      ))}
    </ScrollView>
  </View>
);
