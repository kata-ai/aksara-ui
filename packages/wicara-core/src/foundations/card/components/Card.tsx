import styled from 'styled-components';
import { Box } from '../../box';
import { shadow, ShadowProps, border, BorderProps } from 'styled-system';

export interface CardProps extends ShadowProps, BorderProps {}

/**
 * Card is similar to `Box`, but with additional `shadow` and `borderRadius` styled-system hooks.
 */
const Card = styled(Box)<CardProps>`
  ${shadow}
  ${border}

  overflow: hidden;
`;

Card.displayName = 'Card';

export default Card;
