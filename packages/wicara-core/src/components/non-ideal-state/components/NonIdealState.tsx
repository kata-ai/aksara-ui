import * as React from 'react';
import styled from 'styled-components';

import { Box, Heading } from '../../../foundations';

const ImageWrapper = styled(Box)`
  position: relative;
  height: 100%;

  img,
  svg {
    margin: 0 auto;
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

const NonIdealState: React.FC<NonIdealStateProps> = ({ className, style, image, title, children }) => {
  return (
    <Box className={className} style={style} mx="auto" my="xxl" width="100%" maxWidth="528px" textAlign="center">
      {image && <ImageWrapper mb={60}>{image}</ImageWrapper>}
      <Heading scale={600} mt={0} mb="lg">
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};

NonIdealState.defaultProps = {
  image: undefined,
};

NonIdealState.displayName = 'NonIdealState';

export default NonIdealState;
