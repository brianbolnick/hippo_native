import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Star from "./Star";

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

class Rating extends Component {
  renderStars = () => {
    const { value, large } = this.props;

    //round value to nearest .5
    const rounded = (Math.round(value * 2) / 2).toPrecision(2);

    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<Star type="filled" key={i} size={large ? 40 : 20} />);
      } else if (
        i > Math.floor(rounded) &&
        i <= Math.ceil(rounded) &&
        rounded % 1 !== 0
      ) {
        stars.push(<Star type="half" key={i} size={large ? 40 : 20} />);
      } else {
        stars.push(<Star type="blank" key={i} size={large ? 40 : 20} />);
      }
    }
    return stars;
  };

  render() {
    const { value } = this.props;
    return (
      <TouchableWithoutFeedback>
        <RatingContainer>{this.renderStars()}</RatingContainer>
      </TouchableWithoutFeedback>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number,
  large: PropTypes.bool,
  onSubmit: PropTypes.func
};

Rating.defaultProps = {
  value: 0
};

export default Rating;
