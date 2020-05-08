import * as React from 'react';
import styled from 'styled-components';

import { Box, Heading, Paragraph } from '../../../foundations';

const ImageWrapper = styled(Box)`
  position: relative;
  height: 100%;

  img,
  svg {
    margin: 0 auto;
  }
`;

export interface BlankslateProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Variant of the blankslate component. Can be `page` or `inner`. */
  variant: 'page' | 'inner';
  /** The title of the non-ideal state. */
  title?: string;
  /** Render any image inside the image block up to 155px height. */
  image?: React.ReactNode;
  /** Blankslate text content. */
  content: React.ReactNode;
}

const BlankslateWrapper: React.FC<Pick<BlankslateProps, 'className' | 'style'>> = ({ className, style, children }) => {
  return (
    <Box className={className} style={style} mx="auto" my="xxl" width="100%" maxWidth="528px" textAlign="center">
      {children}
    </Box>
  );
};

const Blankslate: React.FC<BlankslateProps> = ({ className, style, variant, image, title, content, children }) => {
  const renderContent = () => {
    if (children) {
      console.warn('Using `children` has been deprecated in favour of the `content` prop. Please use that instead.');
      return children;
    }

    if (typeof content === 'string') {
      return <Paragraph color="grey07">{content}</Paragraph>;
    }

    return content;
  };

  if (variant === 'inner') {
    return (
      <BlankslateWrapper className={className} style={style}>
        {image && <ImageWrapper mb="md">{image}</ImageWrapper>}
        <Box>{renderContent()}</Box>
      </BlankslateWrapper>
    );
  }

  return (
    <BlankslateWrapper className={className} style={style}>
      {image && <ImageWrapper mb="md">{image}</ImageWrapper>}
      {title && (
        <Heading scale={600} mt={0} mb="lg">
          {title}
        </Heading>
      )}
      <Box>{renderContent()}</Box>
    </BlankslateWrapper>
  );
};

Blankslate.displayName = 'Blankslate';

/** @deprecated use `<Blankslate />` instead */
export const NonIdealState = Blankslate;

export default Blankslate;
