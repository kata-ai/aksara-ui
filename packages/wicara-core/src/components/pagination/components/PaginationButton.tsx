import styled, { css } from 'styled-components';
import { ButtonBase } from '../../button';
import { colors, typeScale } from '../../../utils';

interface PaginationButtonProps {
  isActive?: boolean;
}

const DefaultStyles = css`
  background-color: ${colors.white};
  border-color: ${colors.gray20};

  &:hover,
  &.hover {
    background-color: ${colors.gray10};
  }

  &:active,
  &.active {
    background-color: ${colors.gray70};
    color: ${colors.white};
    border-color: ${colors.gray70};
  }
`;

const IsActiveStyles = css`
  background: ${colors.kataBlue};
  border-color: ${colors.kataBlue};
  color: ${colors.white};

  &:active,
  &.active {
    background: ${colors.kataBlue};
    border-color: ${colors.kataBlue};
    color: ${colors.white};
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

  font-size: ${typeScale.body.fontSize}px;
  line-height: 1;
  user-select: none;

  &:not(:first-of-type) {
    margin-left: 4px;
  }

  &:hover,
  &.hover {
    background-color: ${colors.gray10};
  }

  &:active,
  &.active {
    background-color: ${colors.gray70};
    color: ${colors.white};
    border-color: ${colors.gray70};
  }

  &:disabled,
  &[disabled] {
    color: ${colors.gray50};
    background-color: ${colors.gray10};
    border-color: ${colors.gray10};
  }

  ${props => (props.isActive ? IsActiveStyles : DefaultStyles)}
`;

PaginationButton.displayName = 'PaginationButton';

export default PaginationButton;
