import * as React from 'react';
import styled from 'styled-components';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Content: React.SFC<ContentProps> = ({
  className,
  children,
  style,
  ...rest
}) => (
  <div className={className} style={style} {...rest}>
    {children}
  </div>
);

export default styled(Content)`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  overflow-x: auto;
`;
