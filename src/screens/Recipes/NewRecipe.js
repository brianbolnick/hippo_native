import React from "react";
import { ScrollView, Text, View } from "react-native";

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
