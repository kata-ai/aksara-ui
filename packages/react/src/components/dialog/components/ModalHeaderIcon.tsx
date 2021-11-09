import * as React from 'react';
import { VisuallyHidden } from '../../../helpers';
import { Box, BoxProps } from '../../../layout';

export interface ModalHeaderIconProps extends BoxProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  icon: React.ComponentType<any>;
}

const ModalHeaderIcon: React.FC<ModalHeaderIconProps> = ({ id, className, style, children, title, icon, ...rest }) => {
  return (
    <Box
      className={className}
      style={style}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt="lg"
      px="lg"
      {...rest}
    >
      <VisuallyHidden id={id}>{title}</VisuallyHidden>
      <Box
        display="flex"
        width={72}
        height={72}
        justifyContent="center"
        alignItems="center"
        backgroundColor="red01"
        color="red07"
        borderRadius={72}
      >
        {React.createElement(icon, { 'aria-hidden': true, size: 40, fill: 'currentColor' })}
      </Box>
    </Box>
  );
};

ModalHeaderIcon.displayName = 'ModalHeaderIcon';

export default ModalHeaderIcon;
