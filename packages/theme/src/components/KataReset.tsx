import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../constants';
import { Consumer } from './ThemeContext';
import { ThemeAttributes } from '../types';
import { variables } from '../utils/variables';

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
    .h1 {
      font-size: 1.85rem;
      font-weight: 500;
      line-height: 2.461rem;
      color: ${resolveColor('headingColor')};
    }

    h2,
    .h2 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.153rem;
      color: ${resolveColor('headingColor')};
    }

    h3,
    .h3,
    .title {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.846rem;
      color: ${resolveColor('headingColor')};
    }

    h4,
    .h4,
    h5,
    .h5,
    h6,
    .h6,
    .subtitle {
      font-size: 1.075rem;
      font-weight: 700;
      line-height: 1.538rem;
      color: ${resolveColor('headingColor')};
    }

    small {
      color: ${resolveColor('mutedTextColor')};
    }

    .text-label {
      font-size: 0.925rem;
      font-weight: 700;
      line-height: 1.384rem;
      letter-spacing: 0.2px;
      color: ${resolveColor('mutedTextColor')};
    }

    small,
    .text-small {
      font-size: 0.85rem;
      font-weight: 700;
      line-height: 1.23rem;
      color: ${resolveColor('mutedHeadingColor')};
    }

    .text-label {
      font-size: 0.925rem;
      font-weight: 700;
      line-height: 1.384rem;
      letter-spacing: 0.2px;
      color: ${resolveColor('mutedTextColor')};
    }

    p,
    .body-text {
      font-size: 1rem;
      font-weight: normal;
      color: ${p.textColor};
    }

    .text-primary {
      color: ${variables.colors.kataBlue} !important;
    }

    .text-success {
      color: ${variables.colors.green} !important;
    }

    .text-warning {
      color: ${variables.colors.yellow} !important;
    }

    .text-danger {
      color: ${variables.colors.red} !important;
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
