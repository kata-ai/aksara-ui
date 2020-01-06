import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../../box';
import { Elevation } from '../../../Theme';

export interface CardProps extends BoxProps {
  elevation?: Elevation;
}

/**
 * Renders a card based on the elevation level.
 */
const Card = styled(Box)<CardProps>`
  ${variant({
    prop: 'elevation',
    scale: 'elevation',
    variants: {
      // NOTE: The empty objects here is important.
      // https://styled-system.com/variants#migrating-from-legacy-api
      layer100: {},
      layer200: {},
      layer300: {},
      layer400: {}
    }
  })}
`;

Card.defaultProps = {
  backgroundColor: 'white',
  borderRadius: 'md',
  overflow: 'hidden',
  elevation: 'layer100'
};

Card.displayName = 'Card';

export default Card;
