import styled from "styled-components";
import { View, Text } from "react-native";
import * as colors from "utils/Colors";

export const HeaderContainer = styled.View`
  height: 48;
`;

export const ServingsContainer = styled.View`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 16;
  width: 100%;
`;

export const ServingsGroup = styled.View`
  align-self: flex-end;
`;

export const ServingSize = styled.Text`
  font-weight: 800;
  font-size: 20;
  margin-horizontal: 8;
`;

export const ServingLabel = styled.Text`
  font-size: 14;
  color: ${colors.darkGray};
`;

export const ChangeServingGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RecipeTitle = styled.Text`
  color: ${colors.black};
  font-weight: 900;
  font-size: 32px;
  align-self: flex-start;
  padding-left: 16;
  margin-bottom: 16;
`;

export const FamilyName = styled.Text`
  color: ${colors.mutedGray};
  font-size: 22px;
  font-weight: 600;
  align-self: flex-start;
  padding-left: 16;
`;

export const MetaContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 16;
  margin-bottom: 8;
`;

export const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 50%;
`;
export const Category = styled.Text`
  font-size: 18;
  color: ${colors.darkGray};
  margin-left: 16;
`;

export const RatingContainer = styled.View`
  flex-basis: 50%;
`;

export const SectionTitle = styled.Text`
  color: ${colors.black};
  font-weight: 800;
  font-size: 20;
  margin-vertical: 8;
`;

export const RecipeContent = styled.View`
  padding-horizontal: 16;
  align-items: flex-start;
  width: 100%;
`;

export const Details = styled.Text`
  font-size: 14;
  margin-vertical: 8;
  color: ${colors.darkGray};
`;

export const AuthorTitle = styled.Text``;

export const AuthorName = styled.Text``;

export const IngredientsContainer = styled.View`
  width: 100%;
`;

export const Ingredient = styled.Text`
  font-size: 16;
`;

export const IngredientWrap = styled.View`
  padding-bottom: 8;
  border-bottom-color: ${colors.veryLightGray};
  border-bottom-width: 2;
  margin-bottom: 10;
  width: 100%;
`;

export const StepsContainer = styled.View`
  width: 100%;
`;

export const Step = styled.Text`
  font-size: 16;
  flex: 1;
  flex-wrap: wrap;
`;

export const StepWrap = styled.View`
  background-color: white;
  border-radius: 5;
  border-width: 0;
  margin-top: 16;
  padding-vertical: 16;
  padding-horizontal: 16;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: ${colors.darkGray};
  shadow-offset: 0px 4px;
`;

export const StepNumber = styled.Text`
  color: ${colors.red};
  font-size: 16;
  margin-right: 16;
  font-weight: 900;
`;
