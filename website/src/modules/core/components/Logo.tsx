import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface LogoProps {
  hasLink?: boolean;
}

const Logo: React.SFC<LogoProps> = ({ hasLink }) => {
  if (hasLink) {
    return (
      <NavLink to="/" exact className="kata-logo">
        <Root>
          <img src={require('../../../assets/images/logo.svg')} />
        </Root>
      </NavLink>
    );
  }

  return (
    <Root>
      <img src={require('../../../assets/images/logo.svg')} />
    </Root>
  );
};

export default Logo;

const Root = styled('div')`
  width: 64px;
  height: 100%;
  text-align: center;

  img {
    display: inline-block;
  }
`;
