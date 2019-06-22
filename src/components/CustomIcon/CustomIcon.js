import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as colors from "utils/Colors";



export default class CustomIcon extends Component {
  render() {
    const {
      onPress,
      color,
      viewBoxWidth,
      viewBoxHeight,
      children
    } = this.props;

    return (
      <Svg
        style={{ width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        {...this.props}
      >
        {children}
      </Svg>
    );
  }
}
CustomIcon.propTypes = {
  viewBoxHeight: PropTypes.string,
  viewBoxWidth: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

CustomIcon.defaultProps = {
  color: colors.black,
  viewBoxHeight: "512",
  viewBoxWidth: "512"
};
