import styled from "styled-components";
import * as colors from "utils/Colors";
import { Text, View, Image, TouchableHighlight } from "react-native";
import SearchBar from "components/SearchBar";
import Icon from "components/Icon";

export const DishTypeScroll = styled.ScrollView`
  margin-bottom: 32;
  margin-left: 8;
`;

export const FilterIcon = styled(Icon)`
  margin-horizontal: 8;
  padding-vertical: 8;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
`;

export const EmptyTextTitle = styled.Text`
  text-align: center;
  margin-top: 40;
  font-size: 24px;
  font-weight: 800;
  color: ${colors.red};
  padding-horizontal: 16;
`;
export const EmptyTextSub = styled.Text`
  text-align: center;
  margin-top: 8;
  margin-bottom: 24;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.darkGray};
  padding-horizontal: 16;
`;
export const SectionTitle = styled.Text`
  text-align: left;
  align-self: flex-start;
  margin-top: 8;
  margin-vertical: 8;
  font-size: 18px;
  font-weight: 800;
  color: ${colors.black};
  padding-horizontal: 16;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-vertical: 24;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.TouchableHighlight`
  border-radius: 4px;
  background-color: white;
  margin: 10px 8px;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 5px;
  width: 150;
`;

export const RecipeImage = styled.Image`
  height: 100;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  overflow: hidden;
  font-weight: 600;
  margin-bottom: 8;
  color: ${colors.black};
  font-family: rufina;
`;

export const MetaData = styled.Text`
  color: ${colors.mutedGray};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Footer = styled.View`
  width: 100%;
  background: ${colors.lightGray};
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-horizontal: 8;
`;

export const FooterText = styled.Text`
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

export const Content = styled.View`
  padding: 16px;
`;
