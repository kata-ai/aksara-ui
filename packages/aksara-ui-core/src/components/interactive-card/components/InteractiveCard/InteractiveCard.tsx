import * as React from 'react';
import styled from 'styled-components';
import { Card, CardProps, Box } from '../../../../foundations';
import { componentStyles } from '../../../../utils';

export interface InteractiveCardProps extends Omit<CardProps, 'elevation' | 'position' | 'border' | 'borderColor'> {
  /** Additional action buttons that appear on hover. */
  actions?: React.ReactNode;
  /** Any image to add to the card. */
  image?: string;
  /** Alt text to the card image. */
  imageAlt?: string;
}

const StyledCard = styled(Card)`
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${componentStyles.card[2].boxShadow};
  }
`;

const CardImage = styled('img')`
  vertical-align: middle;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, actions, image, imageAlt, ...rest }) => {
  const [isActionsVisible, setIsActionsVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsActionsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsActionsVisible(false);
  };

  return (
    <StyledCard
      elevation={1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
      border="1px solid"
      borderColor="grey04"
      height="100%"
      minHeight={60}
      {...rest}
    >
      {actions && (
        <Box display={isActionsVisible ? 'block' : 'none'} position="absolute" top="xs" right="xs" zIndex={1}>
          {actions}
        </Box>
      )}
      {image && <CardImage src={image} alt={imageAlt} />}
      {children}
    </StyledCard>
  );
};

export default InteractiveCard;
