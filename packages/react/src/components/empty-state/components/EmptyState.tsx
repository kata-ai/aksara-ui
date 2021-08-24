import * as React from 'react';

import { Box, BoxProps, Heading, Paragraph, Stack } from '../../../layout';

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
  /** Any available actions for the blankslate. */
  actions?: React.ReactNode;
  /** Override the vertical margin. */
  my?: string | number;
}

const ImageWrapper: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      position="relative"
      height="100%"
      sx={{
        ...sx,
        '> *': {
          margin: '0 auto',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

const EmptyState = React.forwardRef<HTMLDivElement, BlankslateProps>(
  ({ className, style, variant, image, title, content, actions, my }, ref) => {
    const renderContent = () => {
      if (typeof content === 'string') {
        return (
          <Paragraph scale={variant === 'page' ? 400 : 300} color="grey07">
            {content}
          </Paragraph>
        );
      }

      return content;
    };

    const renderWrapper = () => {
      if (variant === 'inner') {
        return (
          <Stack spacing="md">
            {image && <ImageWrapper>{image}</ImageWrapper>}
            {title && (
              <Heading scale={400} mt={0}>
                {title}
              </Heading>
            )}
            <Box fontSize="14px" lineHeight="24px">
              {renderContent()}
            </Box>
          </Stack>
        );
      }

      if (variant === 'section') {
        return (
          <Stack spacing="md">
            {image && <ImageWrapper>{image}</ImageWrapper>}
            {title && (
              <Heading scale={400} mt={0}>
                {title}
              </Heading>
            )}
            <Box fontSize="14px" lineHeight="24px">
              {renderContent()}
            </Box>
          </Stack>
        );
      }

      return (
        <Stack spacing="md">
          {image && <ImageWrapper>{image}</ImageWrapper>}
          {title && (
            <Heading scale={600} mt={0}>
              {title}
            </Heading>
          )}
          <Box fontSize="16px" lineHeight="24px">
            {renderContent()}
          </Box>
        </Stack>
      );
    };

    return (
      <Box
        ref={ref}
        className={className}
        style={style}
        mx="auto"
        // eslint-disable-next-line no-nested-ternary
        my={my || variant === 'page' ? 274 : variant === 'section' ? 328 : 178}
        width="100%"
        maxWidth={variant === 'page' ? '528px' : '300px'}
        textAlign="center"
      >
        <Stack spacing="md">
          {renderWrapper()}
          {actions && <Box>{actions}</Box>}
        </Stack>
      </Box>
    );
  }
);

EmptyState.displayName = 'EmptyState';

/** @deprecated - use `EmptyState` instead */
export const Blankslate = EmptyState;

export default EmptyState;
