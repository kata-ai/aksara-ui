import * as React from 'react';

import { Box, BoxProps, Stack } from '../../../layout';
import { Heading, Paragraph } from '../../../typography';

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
  /** Render any icon inside the icon block. */
  icon?: React.ComponentType<any>;
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

const IconWrapper: React.FC<Pick<BlankslateProps, 'variant' | 'icon'>> = ({ variant, icon, ...rest }) => {
  const wrapperSize = React.useMemo(() => {
    if (variant === 'inner') {
      return 72;
    }

    return 96;
  }, [variant]);

  const iconSize = React.useMemo(() => {
    if (variant === 'inner') {
      return 48;
    }

    return 64;
  }, [variant]);

  if (icon) {
    return (
      <Box
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        backgroundColor="greylight03"
        color="greymed04"
        size={wrapperSize}
        borderRadius={9999}
        {...rest}
      >
        {React.createElement(icon, { 'aria-hidden': true, fill: 'currentColor', size: iconSize })}
      </Box>
    );
  }

  return null;
};

const EmptyState = React.forwardRef<HTMLDivElement, BlankslateProps>(
  ({ className, style, variant, image, icon, title, content, actions, my }, ref) => {
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

    const renderImageOrIcon = () => {
      if (image) {
        return <ImageWrapper>{image}</ImageWrapper>;
      }

      if (icon) {
        return <IconWrapper variant={variant} icon={icon} />;
      }

      return null;
    };

    const renderWrapper = () => {
      if (variant === 'inner') {
        return (
          <Stack spacing="md">
            {renderImageOrIcon()}
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
            {renderImageOrIcon()}
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
          {renderImageOrIcon()}
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
