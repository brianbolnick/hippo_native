import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Star from "./Star";
import { View, Text, TouchableOpacity } from "react-native";

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

class Rating extends Component {
  renderStars = () => {
    const { value } = this.props;

    //round value to nearest .5
    const rounded = Math.round(value * 2) / 2;

    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<Star type="filled" key={i} />);
      } else if (
        i > Math.floor(rounded) &&
        i <= Math.ceil(rounded) &&
        rounded % 1 !== 0
      ) {
        stars.push(<Star type="half" key={i} />);
      } else {
        stars.push(<Star type="blank" key={i} />);
      }
    }
    return stars;
  };

  render() {
    const { value } = this.props;
    return (
      <TouchableOpacity>
        <RatingContainer>{this.renderStars()}</RatingContainer>
      </TouchableOpacity>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onSubmit: PropTypes.func
};

export default Rating;
