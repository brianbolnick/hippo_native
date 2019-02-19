import React from "react";
import { View, Text, ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Icon from "src/components/Icon";
import CenterView from "./CenterView";
import * as colors from "utils/Colors";

const iconList = [
  "addRecipe",
  "american",
  "asian",
  "book",
  "bread",
  "cheese",
  "checkCircle",
  "checkOpenCircle",
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "clock",
  "clockAlarm",
  "close",
  "closeOpenCircle",
  "cog",
  "dish",
  "drink",
  "edit",
  "envelope",
  "family",
  "filter",
  "fruit",
  "heartbeat",
  "home",
  "info",
  "italian",
  "list",
  "lock",
  "menu",
  "message",
  "mexican",
  "mixer",
  "new",
  "plus",
  "profile",
  "search",
  "share",
  "signin",
  "star",
  "tags",
  "trash",
  "unlock",
  "upload",
  "user",
  "users",
  "utensils",
  "main",
  "dessert",
  "salad",
  "breakfast"
];

//TODO: OTHERS!
/*
 * Japanese
 * Asian -> Chinese
 * Fusion -> Chinese
 * Indian
 * Thai
 * Vietnamese
 * Vegetarian
 * BBQ
 * Brazilian
 * British
 * Korean
 * Greek
 * French
 * Seafood
 * Middle Eastern
 *
 *
 * DISH TYPES:
 * Beverage - martini glass thing
 * Soup: dish
 * Appetizer - Cheese
 * Main - chicken or chicken leg
 * Side: Corn?
 * Dessert - Donut or ice cream
 * Salad - leaf
 * Breakfast - eggs
 * bread - bread
 */

const IconLabel = styled.Text`
  margin: 0 0 10px 0;
`;

const StyledContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const IconWrapper = styled.View`
  width: 40%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const icons = iconList.map((icon, index) => {
  return (
    <IconWrapper key={index}>
      <Icon name={icon} onClick={action("click")} />
      <IconLabel>{icon}</IconLabel>
    </IconWrapper>
  );
});

const IconList = () => (
  <ScrollView>
    <StyledContainer>{icons}</StyledContainer>
  </ScrollView>
);

const Container = styled.View`
  width: 80%;
  margin: 0 auto;
`;

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Container>
      <Button onPress={action("clicked-text")} label="Click Me!" />
    </Container>
  ))
  .add("Secondary", () => (
    <Container>
      <Button secondary onPress={action("clicked-text")} label="Click Me!" />
    </Container>
  ))
  .add("Loading", () => (
    <Container>
      <Button loading onPress={action("clicked-text")} label="Click Me!" />
    </Container>
  ))
  .add("Teritary", () => (
    <Container>
      <Button tertiary onPress={action("clicked-text")} label="Click Me!" />
    </Container>
  ));

storiesOf("Input", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Container>
      <Input
        onPress={action("clicked-text")}
        label="Label Field"
        placeholder="Placeholder Field"
      />
    </Container>
  ))
  .add("Number Keyboard Input", () => (
    <Container>
      <Input
        onPress={action("clicked-text")}
        label="Label Field"
        placeholder="Placeholder Field"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />
    </Container>
  ));

storiesOf("Icon", module)
  .add("default", () => <IconList />)
  .add("colored", () => (
    <Container>
      <Icon name="home" onClick={action("click")} color={colors.red} />
    </Container>
  ));
