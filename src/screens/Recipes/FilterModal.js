import React from "react";
import {
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from "react-native";
import axios from "axios";
import {
  EmptyTextTitle,
  EmptyTextSub,
  SectionTitle,
  CardsContainer,
  FiltersContainer,
  FilterIcon
} from "./RecipeCardStyledComponents";
import RecipeCard from "./RecipeCard";
import { tempRecipes } from "./helper";
import { getDataFromAs, API_URL } from "utils";
import * as keys from "utils/constants";
import * as colors from "utils/Colors";
import SearchBar from "components/SearchBar";
import Icon from "components/Icon";
import styled from "styled-components";
import Button from "components/Button";

export const ScreenContainer = styled.View`
  flex: 1;
  padding-vertical: 50;
  padding-horizontal: 24;
  justify-content: space-around;
`;

`
`;
export const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 10;
  margin-left: auto;
  margin-right: auto;
  width: 300;
`;

class FilterModal extends React.Component {
  state = { category: 1, dish_type: 1 };

  render() {
    const {
      visible,
      onCloseRequest,
      onCancelRequest,
      onApplyFilters,
      filtersSet
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => console.log("closed")}
      >
        <ScreenContainer style={{ marginTop: 22 }}>
          <ButtonContainer>
            <Button
              label="Apply Filters"
              onPress={() => onApplyFilters(this.state)}
            />
            <Button
              label={filtersSet ? "Remove Filters" : "Cancel"}
              tertiary
              onPress={onCancelRequest}
            />
          </ButtonContainer>
        </ScreenContainer>
      </Modal>
    );
  }
}
export default FilterModal;
