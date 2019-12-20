import styled from 'styled-components';
import { shadow, ShadowProps } from 'styled-system';
import { Box } from '../../box';

export type CardProps = ShadowProps;

/**
 * Card is similar to `Box`, but with additional `shadow` and `border` styled-system hooks.
 */
const Card = styled(Box)<CardProps>`
  ${shadow}
  overflow: hidden;
`;

Card.displayName = 'Card';

export default Card;
