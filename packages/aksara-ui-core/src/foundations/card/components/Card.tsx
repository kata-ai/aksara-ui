import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../../box';
import { sfp } from '../../../system';
import { CardElevation } from '../../../theme';

export interface CardProps extends BoxProps {
  elevation?: CardElevation;
}

const cardProps = ['elevation'];

/**
 * Renders a card based on the elevation level.
 */
const Card = styled(Box).withConfig<CardProps>({ shouldForwardProp: sfp(cardProps) })`
  ${variant({
    prop: 'elevation',
    scale: 'componentStyles.card',
    variants: {
      // NOTE: The empty objects here is important.
      // https://styled-system.com/variants#migrating-from-legacy-api
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
  })}
`;

Card.defaultProps = {
  backgroundColor: 'white',
  borderRadius: 'md',
  overflow: 'hidden',
  elevation: 1,
};

Card.displayName = 'Card';

export default Card;
