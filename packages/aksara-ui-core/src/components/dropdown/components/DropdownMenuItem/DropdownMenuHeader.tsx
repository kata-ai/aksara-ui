import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box, Text } from '../../../../foundations';
import { colors } from '../../../../utils';

export interface DropdownMenuHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Root = styled(Box)`
  background-color: ${themeGet('colors.grey01', colors.grey01)};
`;

const Header = styled(Text)`
  text-transform: uppercase;
`;

const DropdownMenuHeader: React.FC<DropdownMenuHeaderProps> = ({ className, style, children }) => {
  return (
    <Root py="xs" px="md" className={className} style={style}>
      <Header scale={200} fontWeight={700} color="grey07">
        {children}
      </Header>
    </Root>
  );
};

DropdownMenuHeader.displayName = 'DropdownMenuItem';

export default DropdownMenuHeader;
