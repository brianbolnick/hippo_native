import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card } from "react-native-elements";
import Button from 'components/Button'

const images = [
  {
    key: 1,
    name: "Pizza",
    image: require("../images/1.jpg"),
    url: "https://hungryhippo.app"
  },
  {
    key: 2,
    name: "Tacos",
    image: require("../images/2.jpg"),
    url: "https://hungryhippo.app"
  },
  {
    key: 3,
    name: "Carbonara",
    image: require("../images/3.jpg"),
    url: "https://hungryhippo.app"
  },
  {
    key: 4,
    name: "Waffles",
    image: require("../images/4.jpg"),
    url: "https://hungryhippo.app"
  }
];

export default ({navigation}) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, image, url, key }) => (
        <Card title="FAKE STUFF!" image={image} key={key}>
          <Text style={{ marginBottom: 10 }}>
            {name}
          </Text>
          <Button
            label="VIEW NOW"
            onPress={() => Linking.openURL(url)}
          />
        </Card>
      ))}
    </ScrollView>
  </View>
);
