import * as React from 'react';
import styled from 'styled-components';

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
  <div className={className} style={style} {...rest}>
    {children}
  </div>
);

export default styled(Wrapper)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
