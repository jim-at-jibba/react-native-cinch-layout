import * as React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { flex, drawDebug } from '../helpers';

export const CinchBox = styled.View`
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
`;

CinchBox.propTypes = {
  /**
   * Enable if you want the geometry of the grid exposed
   */
  debug: PropTypes.bool,

  /**
   * Interface for setting the `flex` css property
   */
  flex: PropTypes.number,
};

CinchBox.defaultProps = {
  debug: false,
};
