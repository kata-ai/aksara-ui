import * as React from 'react';
import styled from 'styled-components';

import { Box, Heading, Paragraph } from '../../../layout';

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
  variant: 'page' | 'section' | 'inner';
  /** The title of the non-ideal state. */
  title?: string;
  /** Render any image inside the image block up to 155px height. */
  image?: React.ReactNode;
  /** Blankslate text content. */
  content: React.ReactNode;
}

const Blankslate = React.forwardRef<HTMLDivElement, BlankslateProps>(
  ({ className, style, variant, image, title, content, children }, ref) => {
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

    const renderWrapper = () => {
      if (variant === 'inner') {
        return (
          <>
            {image && <ImageWrapper mb="md">{image}</ImageWrapper>}
            <Box fontSize="14px" lineHeight="24px">
              {renderContent()}
            </Box>
          </>
        );
      }

      if (variant === 'section') {
        return (
          <>
            {image && <ImageWrapper mb="md">{image}</ImageWrapper>}
            {title && (
              <Heading scale={400} mt={0} mb="md">
                {title}
              </Heading>
            )}
            <Box fontSize="14px" lineHeight="24px">
              {renderContent()}
            </Box>
          </>
        );
      }

      return (
        <>
          {image && <ImageWrapper mb="md">{image}</ImageWrapper>}
          {title && (
            <Heading scale={600} mt={0} mb="md">
              {title}
            </Heading>
          )}
          <Box fontSize="16px" lineHeight="24px">
            {renderContent()}
          </Box>
        </>
      );
    };

    return (
      <Box
        ref={ref}
        className={className}
        style={style}
        mx="auto"
        my="xxl"
        width="100%"
        maxWidth="528px"
        textAlign="center"
      >
        {renderWrapper()}
      </Box>
    );
  }
);

Blankslate.displayName = 'Blankslate';

export default Blankslate;
