import * as React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import { flex, drawDebug } from "../helpers";

export const CinchBox = styled.View`
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
`;

CinchBox.defaultProps = {
  flex: 1,
  debug: false
};
