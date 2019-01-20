import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text
} from "react-native";
import * as colors from "utils/Colors";
import Button from "components/Button";
import Icon from "components/Icon/Icon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addRecipe } from "utils/actions";

const HeaderContainer = styled.View`
  height: 48;
`;

const RecipeTitle = styled.Text`
  color: ${colors.black};
  font-weight: 900;
  font-size: 32px;
  align-self: flex-start;
  padding-left: 16;
  margin-bottom: 16;
`;

const RecipeCategory = styled.Text`
  color: ${colors.mutedGray};
  font-size: 24px;
  font-weight: 600;
  align-self: flex-start;
  padding-left: 16;
`;

class ShowRecipe extends React.Component {
  componentDidMount = () => {
    const data = this.props.navigation.getParam("data", {});
    this.props.addRecipe(data);
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    return (
      <View style={{ flex: 1, paddingVertical: 50 }}>
        <HeaderContainer style={{ alignItems: "flex-start" }}>
          <Icon
            onPress={() => navigation.navigate("Recipes")}
            name="chevronLeft"
            size={40}
            color={colors.red}
          />
        </HeaderContainer>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <RecipeCategory>{data.category.name}</RecipeCategory>
          <RecipeTitle>{data.title}</RecipeTitle>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{ uri: data.image_url }}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addRecipe }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ShowRecipe);
