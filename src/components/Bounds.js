import * as React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { flex, drawDebug } from '../helpers';

export const CinchBounds = styled.View`
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
`;

CinchBounds.propTypes = {
  /**
   * Enable if you want the geometry of the grid exposed
   */
  debug: PropTypes.bool,

  /**
   * Interface for setting the `flex` css property
   */
  flex: PropTypes.number,

  /**
   * The primary axis the children should be in line with
   */
  flexDirection: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Whether children should wrap when there's no more room
   * on the primary axis.
   */
  wrap: PropTypes.bool,

  /**
   * Alignment of children along the vertical axis
   */
  valign: PropTypes.oneOf(['top', 'center', 'bottom', null]),

  /**
   * Alignment of children along the horizontal axis
   */
  halign: PropTypes.oneOf(['left', 'center', 'right', null]),
};

CinchBounds.defaultProps = {
  flex: 1,
  debug: false,
  flexDirection: 'horizontal',
  wrap: false,
};
