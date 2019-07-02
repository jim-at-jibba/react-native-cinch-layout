import * as React from 'react'

export interface CinchBoundsProps {
  /**
   * Enable if you want the geometry of the grid exposed
   */
  debug: boolean

  /**
   * Interface for setting the `flex` css property
   */
  flex?: number

  /**
   * The primary axis the children should be in line with
   */
  flexDirection?: 'horizontal' | 'vertical'

  /**
   * Whether children should wrap when there's no more room
   * on the primary axis.
   */
  wrap?: boolean

  /**
   * Alignment of children along the vertical axis
   */
  valign?: 'top' | 'center' | 'bottom'

  /**
   * Alignment of children along the horizontal axis
   */
  halign?: 'left' | 'center' | 'right'
}

export interface CinchBoxProps {
  /**
   * Enable if you want the geometry of the grid exposed
   */
  debug?: boolean

  /**
   * Interface for setting the `flex` css property
   */
  flex?: number
}

export class CinchBounds extends React.Component<CinchBoundsProps> {}
export class CinchBox extends React.Component<CinchBoxProps> {