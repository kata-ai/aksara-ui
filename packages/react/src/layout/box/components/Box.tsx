import * as React from 'react';
import styled from 'styled-components';
import {
  allSystemProps,
  AllSystemProps,
  pseudoSystemProps,
  PseudoSystemProps,
  shouldForwardProp,
  sxMixin,
  SxProps,
} from '../../../system';

export interface BoxProps extends SxProps, AllSystemProps, PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

/**
 * Box is a base component with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
const Box = styled('div').withConfig<BoxProps>({ shouldForwardProp })(sxMixin, allSystemProps, pseudoSystemProps);

Box.displayName = 'Box';

export default Box;
