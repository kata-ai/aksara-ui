import * as React from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from '../../../../foundations';
import {
  buttonGroupSegmented,
  buttonGroupNonSegmented,
  buttonGroupInnerSegmented,
  buttonGroupInnerNonSegmented,
} from './styles';
import { ButtonProps } from '../../../button/Button';
import { IconButtonSizes, ButtonSizes } from '../../../button/types';

export interface ButtonGroupProps extends BoxProps {
  /** Join buttons as segmented group. */
  segmented?: boolean;
  /** Stretch the buttons to fit the containing element. */
  fullWidth?: boolean;
  /** The size of butttons in this button group. */
  size?: IconButtonSizes | ButtonSizes;
}

const Root = styled(Box)<ButtonGroupProps>`
  ${props => (props.segmented ? buttonGroupSegmented : buttonGroupNonSegmented)}
`;

const Inner = styled('div')<ButtonGroupProps>`
  ${props => (props.segmented ? buttonGroupInnerSegmented : buttonGroupInnerNonSegmented)}

  > button:focus, > button:active {
    z-index: 10;
  }
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, segmented, fullWidth, size, ...rest }) => {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Root segmented={segmented} fullWidth={fullWidth} {...rest}>
      {validChildren.map((child, i) => {
        const isFirstChild = i === 0;
        const isLastChild = validChildren.length === i + 1;

        const borderLeftRadiuses = !isFirstChild ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {};
        const borderRightRadiuses = !isLastChild
          ? { marginRight: -1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }
          : {};

        const borderProps = segmented ? { ...borderLeftRadiuses, ...borderRightRadiuses } : {};

        return (
          <Inner segmented={segmented} fullWidth={fullWidth}>
            {React.cloneElement(child, { ...borderProps, size } as ButtonProps)}
          </Inner>
        );
      })}
    </Root>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.defaultProps = {
  segmented: false,
  fullWidth: false,
  size: 32,
};

export default ButtonGroup;
