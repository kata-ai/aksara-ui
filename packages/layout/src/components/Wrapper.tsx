import * as React from 'react';
import styled from 'styled-components';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper: React.SFC<WrapperProps> = ({
  className,
  children,
  style,
  ...rest
}) => (
  <Root className={className} style={style} {...rest}>
    {children}
  </Root>
);

export default Wrapper;
