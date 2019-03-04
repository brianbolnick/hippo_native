import React from "react";
import {
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Picker
} from "react-native";
import axios from "axios";
import {
  EmptyTextTitle,
  EmptyTextSub,
  SectionTitle,
  CardsContainer,
  FiltersContainer,
  FilterIcon
} from "./DishTypePickerStyledComponents";
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

export const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 10;
  margin-left: auto;
  margin-right: auto;
  width: 300;
`;

const InputContainer = styled.View`
  justify-content: center;
`;

const StyledPicker = styled(Picker)``;

const Label = styled.Text`
  margin-bottom: 8;
  font-size: 18;
  font-weight: 900;
`;

class FilterModal extends React.Component {
  state = { categories: [], dishTypes: [], category: 1 };

  getCategories = authToken => {
    return axios.get(`${API_URL}/categories`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
  };

  getDishTypes = authToken => {
    return axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
  };

  async componentDidMount() {
    const { authToken } = await getDataFromAs();

    axios
      .all([this.getCategories(authToken), this.getDishTypes(authToken)])
      .then(
        axios.spread((categoryData, dishTypeData) => {
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;
          this.setState({ categories, dishTypes });
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  renderDishTypes = () => {
    const { dishTypes } = this.state;
    return dishTypes.map(dishType => {
      return (
        <Picker.Item
          key={`dishType|${dishType.id}`}
          value={dishType.id}
          label={dishType.name}
        />
      );
    });
  };

  renderCategories = () => {
    const { categories } = this.state;
    return categories.map(category => {
      return (
        <Picker.Item
          key={`category|${category.id}`}
          value={category.id}
          label={category.name}
        />
      );
    });
  };

  handleSubmit = () => {
    const { category, dish_type } = this.state;
    console.log({ category, dish_type });
    this.props.onApplyFilters({ category });
  };

  render() {
    const {
      visible,
      onCloseRequest,
      onCancelRequest,
      onApplyFilters
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => console.log("closed")}
      >
        <ScreenContainer style={{ marginTop: 22 }}>
          <InputContainer>
            <Label>Category</Label>
            <StyledPicker
              selectedValue={this.state.category}
              onValueChange={(value, index) => {
                this.setState({ category: value });
              }}
            >
              {this.renderCategories()}
            </StyledPicker>
            {/*
            <Label>Dish Type</Label>
            <StyledPicker
              selectedValue={this.state.dish_type}
              onValueChange={(value, index) => {
                this.setState({ dish_type: value });
              }}
            >
              {this.renderDishTypes()}
            </StyledPicker>
						*/}
          </InputContainer>
          <ButtonContainer>
            <Button label="Apply Filters" onPress={this.handleSubmit} />
          </ButtonContainer>
        </ScreenContainer>
      </Modal>
    );
  }
}
export default FilterModal;
