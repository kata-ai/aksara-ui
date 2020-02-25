import { css } from 'styled-components';
import { colors } from '../../../utils/variables';
import { componentStyles } from '../../../utils';
import { OutlineButtonBaseProps } from '../types';

export const OutlineButtonDefault = css`
  color: ${colors.grey08};
`;

export const OutlineButtonPrimary = css`
  color: ${colors.blue07};
`;

export const OutlineButtonSuccess = css`
  color: ${colors.green07};
`;

export const OutlineButtonWarning = css`
  color: ${colors.yellow07};
`;

export const OutlineButtonDestructive = css`
  color: ${colors.red07};
`;

export const OutlineButtonSmall = (props: OutlineButtonBaseProps) => css`
  height: 32px;
  padding: 0 12px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 40px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 40px;'}
`;

export const OutlineButtonMedium = (props: OutlineButtonBaseProps) => css`
  height: 40px;
  padding: 0 24px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const OutlineButtonLarge = (props: OutlineButtonBaseProps) => css`
  height: 56px;
  padding: 0 24px;
  font-size: ${componentStyles.text[400].fontSize};
  line-height: ${componentStyles.text[400].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;

export const InverseButton = css`
  border-color: ${colors.grey01};
  color: ${colors.grey01};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
