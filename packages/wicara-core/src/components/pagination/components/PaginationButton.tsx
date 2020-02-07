import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ButtonBase } from '../../button';
import { colors } from '../../../utils';

interface PaginationButtonProps {
  isActive?: boolean;
}

const DefaultStyles = css`
  color: inherit;

  &:focus,
  &.focus {
    background-color: ${themeGet('colors.grey02', colors.grey02)};
  }

  &:active,
  &.active {
    border-color: ${themeGet('colors.blue05', colors.blue05)};
  }
`;

const IsActiveStyles = css`
  background-color: ${themeGet('colors.blue01', colors.blue01)};
  border-color: ${themeGet('colors.blue01', colors.blue01)};
  color: ${themeGet('colors.blue06', colors.blue06)};

  &:hover,
  &.hover {
    background-color: ${themeGet('colors.blue01', colors.blue01)};
  }

  &:active,
  &.active {
    background-color: ${themeGet('colors.blue01', colors.blue01)};
    border-color: ${themeGet('colors.blue01', colors.blue01)};
    color: ${themeGet('colors.blue06', colors.blue06)};
  }
`;

const PaginationButton = styled('button')<PaginationButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid transparent;

  ${ButtonBase}

  user-select: none;

  &:not(:first-of-type) {
    margin-left: 4px;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.7;
  }

  ${props => (props.isActive ? IsActiveStyles : DefaultStyles)}
`;

PaginationButton.displayName = 'PaginationButton';

export default PaginationButton;
