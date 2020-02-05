import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { Box, Heading } from '../../../foundations';

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Wrapper = styled(Box)`
  animation: ${FadeIn} 0.75s ease;
  max-width: 320px;
`;

const ImageWrapper = styled(Box)`
  position: relative;
  height: 100%;
  max-height: 155px;

  img,
  svg {
    margin: 0 auto;
    height: 100%;
    max-height: 155px;
  }
`;

export interface NonIdealStateProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** The title of the non-ideal state. */
  title: string;
  /** Render any image inside the image block up to 155px height. */
  image?: React.ReactNode;
}

const NonIdealState: React.FC<NonIdealStateProps> = ({
  className,
  style,
  image,
  title,
  children
}) => {
  return (
    <Wrapper className={className} style={style} mx="auto" my="xxl" textAlign="center">
      {image && <ImageWrapper mb="lg">{image}</ImageWrapper>}
      <Heading as="h3" scale={600} mt={0} mb="xs">
        {title}
      </Heading>
      <Box>{children}</Box>
    </Wrapper>
  );
};

NonIdealState.defaultProps = {
  image: undefined
};

NonIdealState.displayName = 'NonIdealState';

export default NonIdealState;
