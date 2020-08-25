import { css } from 'styled-components';
import { colors } from '../../../../../utils/variables';
import { ButtonBaseProps } from '../types';
import { componentStyles } from '../../../../../utils';

export const ButtonDefault = css`
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonPrimary = css`
  background-color: ${colors.blue06};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue07};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonSupport = css`
  border-color: ${colors.grey04};
  background-color: ${colors.grey01};
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      border-color: ${colors.grey04};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }

    &.selected {
      background-color: ${colors.blue01};
      color: ${colors.blue08};
      border-color: ${colors.blue04};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey01};
    color: ${colors.grey04};
  }
`;

export const ButtonDestructive = css`
  background-color: ${colors.red07};
  color: ${colors.grey01};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.red08};
      color: ${colors.grey01};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.red09};
      border-color: ${colors.red07};
      color: ${colors.grey01};
      box-shadow: 0 0 2px 1px rgba(186, 19, 9, 0.4), 0 0 0 1px ${colors.red07};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonGhost = css`
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0 0 2px 1px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonSmall = (props: ButtonBaseProps) => css`
  height: 32px;
  padding: 0 12px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 40px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 40px;'}
`;

export const ButtonMedium = (props: ButtonBaseProps) => css`
  height: 40px;
  padding: 0 16px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const ButtonLarge = (props: ButtonBaseProps) => css`
  height: 48px;
  padding: 0 24px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const InverseButton = css`
  border-color: ${colors.white};
  color: ${colors.white};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
