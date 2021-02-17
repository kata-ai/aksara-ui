import styled from 'styled-components';
import { variant } from 'styled-system';
import {
  sfp,
  allSystemProps,
  AllSystemProps,
  pseudoSystemProps,
  PseudoSystemProps,
  sxMixin,
  SxProps,
} from '../../../system';

export type CardElevation = 1 | 2 | 3 | 4 | 5;

export interface CardProps extends AllSystemProps, PseudoSystemProps, SxProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
  elevation?: CardElevation;
}

const cardProps = ['elevation'];

/**
 * Renders a card based on the elevation level.
 */
const Card = styled('div').withConfig<CardProps>({ shouldForwardProp: sfp(cardProps) })(
  variant({
    prop: 'elevation',
    scale: 'componentStyles.card.scales.elevations',
    variants: {
      // NOTE: The empty objects here is important.
      // https://styled-system.com/variants#migrating-from-legacy-api
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
  }),
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

Card.defaultProps = {
  backgroundColor: 'white',
  borderRadius: 'md',
  overflow: 'hidden',
  elevation: 1,
};

Card.displayName = 'Card';

export default Card;
