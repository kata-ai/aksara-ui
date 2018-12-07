import * as React from 'react';
import styled from 'styled-components';

interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

const AppRoot: React.SFC<AppRootProps> = ({
  className,
  children,
  style,
  ...rest
}) => (
  <div className={className} style={style} {...rest}>
    {children}
  </div>
);

export default styled(AppRoot)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
