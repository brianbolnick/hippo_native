import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";
import * as colors from "utils/Colors";

const StyledTab = styled.TouchableHighlight`
  margin-right: 16px;
  width: 100%;
  flex-basis: 50%;

  ${({ isActive }) =>
    isActive &&
    `
			border-bottom-color: ${colors.red};
			border-bottom-width: 4px;
			padding-bottom: 4px;
		`};
`;

const Tab = ({ children, name, onPress, isActive, ...props }) => {
  const renderChildren = () => {
    return React.cloneElement(children, { isActive });
  };

  return (
    <StyledTab onPress={() => onPress(name)} isActive={isActive} {...props}>
      {renderChildren()}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.element.isRequired, //title or display name of the tab
  name: PropTypes.string.isRequired, //name to associate with the associated tab pane
  onPress: PropTypes.func, //callback for clicking on the tab
  isActive: PropTypes.bool //handles styling for the active and inactive tabs
};

export default Tab;
