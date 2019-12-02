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
    border-color: ${colors.gray70};
    color: ${colors.white};
  }
`;

const IsActiveStyles = css`
  background-color: ${colors.kataBlue};
  border-color: ${colors.kataBlue};
  color: ${colors.white};

  &:hover,
  &.hover {
    background-color: ${colors.kataBlue};
  }

  &:active,
  &.active {
    background-color: ${colors.kataBlue};
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

  &:disabled,
  &[disabled] {
    background-color: ${colors.gray10};
    border-color: ${colors.gray10};
    color: ${colors.gray50};
  }

  ${props => (props.isActive ? IsActiveStyles : DefaultStyles)}
`;

PaginationButton.displayName = 'PaginationButton';

export default PaginationButton;
