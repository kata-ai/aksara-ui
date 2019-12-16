import styled from 'styled-components';
import { shadow, ShadowProps, border, BorderProps } from 'styled-system';
import { Box } from '../../box';

export interface CardProps extends ShadowProps, BorderProps {}

/**
 * Card is similar to `Box`, but with additional `shadow` and `border` styled-system hooks.
 */
const Card = styled(Box)<CardProps>`
  ${shadow}
  ${border}

  overflow: hidden;
`;

Card.displayName = 'Card';

export default Card;
