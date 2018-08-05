import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../constants';
import { Consumer } from './ThemeContext';
import { ThemeAttributes } from '../types';

const resolveColor = (preferred: keyof ThemeAttributes) => (
  p: ThemeAttributes
) => p[preferred] || p.textColor;

const Div = styled('div')`
  ${(p: ThemeAttributes) => css`
    background-color: ${p.backgroundColor};
    color: ${p.textColor};

    a {
      color: ${resolveColor('linkColor')};
    }
    a:hover {
      color: ${resolveColor('linkColorHover')};
    }
    a:active {
      color: ${resolveColor('linkColorActive')};
    }
    a:focus {
      outline-color: ${resolveColor('linkColorOutline')};
    }

    h1,
    h2,
    h3,
    h4 {
      color: ${resolveColor('headingColor')};
    }

    h5,
    h6 {
      color: ${resolveColor('mutedHeadingColor')};
    }

    small {
      color: ${resolveColor('mutedTextColor')};
    }
  `};
`;

interface ResetProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export default class Reset extends Component<ResetProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Consumer>
        {theme => (
          <Div {...defaultTheme} {...theme} {...rest}>
            {children}
          </Div>
        )}
      </Consumer>
    );
  }
}
