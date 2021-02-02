import { css } from 'styled-components';
import { theme } from '../../../../../theme';
import { ButtonBaseProps } from '../types';

export const ButtonDefault = css`
  color: ${theme.colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${theme.colors.grey03};
      color: ${theme.colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${theme.colors.grey03};
      color: ${theme.colors.blue08};
      border-color: ${theme.colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${theme.colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${theme.colors.grey04};
    background-color: ${theme.colors.grey04};
    color: ${theme.colors.grey01};
  }
`;

export const ButtonPrimary = css`
  background-color: ${theme.colors.blue06};
  color: ${theme.colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${theme.colors.blue07};
      color: ${theme.colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${theme.colors.blue08};
      border-color: ${theme.colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${theme.colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${theme.colors.grey04};
    background-color: ${theme.colors.grey04};
    color: ${theme.colors.grey01};
  }
`;

export const ButtonSupport = css`
  border-color: ${theme.colors.grey04};
  background-color: ${theme.colors.grey01};
  color: ${theme.colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${theme.colors.grey03};
      border-color: ${theme.colors.grey04};
      color: ${theme.colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${theme.colors.grey03};
      color: ${theme.colors.blue08};
      border-color: ${theme.colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${theme.colors.blue06};
    }

    &.selected {
      background-color: ${theme.colors.blue01};
      color: ${theme.colors.blue08};
      border-color: ${theme.colors.blue04};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${theme.colors.grey04};
    background-color: ${theme.colors.grey01};
    color: ${theme.colors.grey04};
  }
`;

export const ButtonDestructive = css`
  background-color: ${theme.colors.red07};
  color: ${theme.colors.grey01};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${theme.colors.red08};
      color: ${theme.colors.grey01};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${theme.colors.red09};
      border-color: ${theme.colors.red07};
      color: ${theme.colors.grey01};
      box-shadow: 0 0 2px 1px rgba(186, 19, 9, 0.4), 0 0 0 1px ${theme.colors.red07};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${theme.colors.grey04};
    background-color: ${theme.colors.grey04};
    color: ${theme.colors.grey01};
  }
`;

export const ButtonGhost = css`
  color: ${theme.colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${theme.colors.grey03};
      color: ${theme.colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${theme.colors.grey03};
      color: ${theme.colors.blue08};
      border-color: ${theme.colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${theme.colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${theme.colors.grey04};
    background-color: ${theme.colors.grey04};
    color: ${theme.colors.grey01};
  }
`;

export const ButtonSmall = (props: ButtonBaseProps) => css`
  height: 32px;
  padding: 0 12px;
  font-size: ${theme.componentStyles.text[300].fontSize};
  line-height: 30px;
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 40px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 40px;'}
`;

export const ButtonMedium = (props: ButtonBaseProps) => css`
  height: 40px;
  padding: 0 16px;
  font-size: ${theme.componentStyles.text[300].fontSize};
  line-height: 38px;
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const ButtonLarge = (props: ButtonBaseProps) => css`
  height: 48px;
  padding: 0 24px;
  font-size: ${theme.componentStyles.text[300].fontSize};
  line-height: 46px;
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const InverseButton = css`
  border-color: ${theme.colors.white};
  color: ${theme.colors.white};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
