import { css } from 'styled-components';
import { typeScale, colors } from '../../../utils/variables';
import { OutlineButtonBaseProps } from '../types';

export const OutlineButtonDefault = css`
  color: ${colors.gray80};
`;

export const OutlineButtonPrimary = css`
  color: ${colors.kataBlue};
`;

export const OutlineButtonSuccess = css`
  color: ${colors.green};
`;

export const OutlineButtonWarning = css`
  color: ${colors.yellow};
`;

export const OutlineButtonDestructive = css`
  color: ${colors.red};
`;

export const OutlineButtonSmall = (props: OutlineButtonBaseProps) => css`
  height: 32px;
  padding: 0 16px;
  font-size: 11px;
  border-radius: 4px;
  font-weight: 700;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 36px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 36px;'}
`;

export const OutlineButtonMedium = (props: OutlineButtonBaseProps) => css`
  height: 40px;
  padding: 0 24px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 500;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const OutlineButtonLarge = (props: OutlineButtonBaseProps) => css`
  height: 56px;
  padding: 0 24px;
  font-size: ${typeScale.large.fontSize}px;
  border-radius: 4px;
  font-weight: 500;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const InverseButton = css`
  border-color: ${colors.white};
  color: ${colors.white};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
