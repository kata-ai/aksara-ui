import React from 'react';
import styled from 'styled-components';
import { variables, Theme, KataReset, ThemeAttributes } from '@kata-kit/theme';

interface ExampleProps {
  title?: string;
}

const Example: React.SFC<ExampleProps> = ({ children, title }) => (
  <Theme values={outerTheme}>
    {themeAttributes => (
      <Wrapper {...themeAttributes}>
        {title && <Title>{title}</Title>}
        <Theme values={innerTheme}>
          {innerTheme => <Inner theme={innerTheme}>{children}</Inner>}
        </Theme>
      </Wrapper>
    )}
  </Theme>
);

export default Example;

const Title = styled('h3')`
  margin-top: 0;
  margin-bottom: ${variables.spaces.space1}};
`;

const Wrapper = styled<ThemeAttributes, 'div'>('div')`
  margin: ${variables.spaces.space3} 0;
  padding: ${variables.spaces.space1};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};

  ${Title} {
    color: ${props => props.textColor};
  }
`;

const Inner = styled(KataReset)`
  padding: ${variables.spaces.space2}};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};
`;

const outerTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  textColor: variables.colors.gray70
};

const innerTheme: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  textColor: variables.colors.gray70,
  borderColor: variables.colors.gray30
};
