import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import { Svg } from "expo";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from "utils/Colors";

const { Path, G } = Svg;

const Container = styled.View`
  height: ${({ size }) => size || "24"};
  width: ${({ size }) => size || "24"};
`;
const PressableContainer = styled.TouchableOpacity`
  height: ${({ size }) => size || "24"};
  width: ${({ size }) => size || "24"};
`;

export default class Icon extends Component {
  render() {
    const {
      onPress,
      size,
      color,
      viewBoxWidth,
      viewBoxHeight,
      children
    } = this.props;

    const ContainerComponent = onPress ? PressableContainer : Container;

    return (
      <ContainerComponent {...this.props}>
        <Svg
          onPress={onPress}
          color={color}
          height={size}
          width={size}
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          {...this.props}
        >
          {children}
        </Svg>
      </ContainerComponent>
    );
  }
}
Icon.propTypes = {
  size: PropTypes.number.isRequired,
  viewBoxHeight: PropTypes.string,
  viewBoxWidth: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

Icon.defaultProps = {
  color: colors.black,
  viewBoxHeight: "512",
  viewBoxWidth: "512"
};
