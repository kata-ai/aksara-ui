import { IconClose } from '@aksara-ui/icons';
import * as React from 'react';
// import { Heading } from '../../../typography';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { UnstyledButton } from '../../button/components/UnstyledButton';

export interface BoxHeaderProps extends Omit<BoxProps, 'children'> {
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'lg';
  title?: React.ReactNode;
  centerTitle?: boolean;
  backButton?: React.ReactNode;
  actions?: React.ReactNode;
  hideCloseButton?: boolean;
  closeButtonHandler?: () => void;
}

const BoxHeader: React.FC<BoxHeaderProps> = ({
  title,
  centerTitle = false,
  actions,
  backButton,
  className,
  style,
  children,
  size = 'sm',
  hideCloseButton,
  closeButtonHandler,
  sx,
  ...rest
}) => {
  const boxHeaderStyle = useComponentStyles('boxHeader', { size });
  const renderCloseButton = () => {
    return (
      <UnstyledButton
        type="button"
        aria-label="Close"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 24,
          color: 'greydark02',
        }}
        onClick={closeButtonHandler}
      >
        <IconClose aria-hidden size={24} fill="currentColor" />
      </UnstyledButton>
    );
  };
  return (
    <Box sx={{ ...boxHeaderStyle, ...sx }} className={className} style={style} {...rest}>
      {backButton && (
        <Box marginRight={[0, 'md']} marginBottom={['xs', 0]}>
          {backButton}
        </Box>
      )}
      <Box display={'flex'} flex={1} justifyContent={centerTitle ? 'center' : 'flex-start'}>
        {title}
      </Box>
      {actions && <Box marginTop={['md', 0]}>{actions}</Box>}
      {!hideCloseButton && (
        <Box display={'flex'} position="absolute" right="24px">
          {renderCloseButton()}
        </Box>
      )}
    </Box>
  );
};

export default BoxHeader;
