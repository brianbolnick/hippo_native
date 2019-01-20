import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-elements";
import Button from "components/Button";
import { onSignOut } from "utils/auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Fake Person">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>AB</Text>
      </View>
      <Button
        label="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
  </View>
);
