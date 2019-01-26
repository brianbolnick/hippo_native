import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image, View, ScrollView } from "react-native";
import { addRecipe } from "utils/actions";
import Button from "components/Button";
import Icon from "components/Icon";
import Rating from "components/Rating";
import * as colors from "utils/Colors";
import {
  HeaderContainer,
  RecipeTitle,
  FamilyName,
  MetaContainer,
  CategoryContainer,
  Category,
  RatingContainer,
  SectionTitle,
  RecipeContent,
  Details,
  AuthorTitle,
  AuthorName,
  IngredientsContainer,
  Ingredient,
  IngredientWrap,
  StepsContainer,
  Step,
  StepWrap,
  StepNumber,
  ServingsContainer,
  ServingsGroup,
  ServingSize,
  ChangeServingGroup,
  ServingLabel
} from "./ShowRecipeStyledComponents";
const PlaceholderImage = require("images/recipe-placeholder.png");

class ServingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: props.currentServings
    };
  }

  onAdd = () => {
    this.setState({ servings: this.state.servings + 1 }, () => {
      const servingsFactor = this.state.servings / this.props.currentServings;
      this.props.onChange(servingsFactor);
    });
  };

  onMinus = () => {
    if (this.state.servings !== 0) {
      this.setState({ servings: this.state.servings - 1 }, () => {
        const servingsFactor = this.state.servings / this.props.currentServings;
        this.props.onChange(servingsFactor);
      });
    }
  };

  render() {
    const { onChange, currentServingss } = this.props;
    const { servings } = this.state;
    return (
      <ServingsGroup>
        <ServingLabel>Servings</ServingLabel>
        <ChangeServingGroup>
          <Icon
            name="minusCircle"
            color={colors.black}
            size={20}
            onPress={this.onMinus}
          />
          <ServingSize>{servings}</ServingSize>
          <Icon
            name="plusCircle"
            size={20}
            color={colors.black}
            onPress={this.onAdd}
          />
        </ChangeServingGroup>
      </ServingsGroup>
    );
  }
}

export default ServingsForm;
