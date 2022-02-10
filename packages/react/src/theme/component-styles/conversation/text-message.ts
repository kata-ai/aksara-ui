import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn, CSSObject } from '../../../system';

const messageBoxStyle: CSSObject = {
  pl: 'xs',
  py: 'xxs',
  maxWidth: 125,
  borderRadius: 12,
  position: 'relative',
};

const inboundMessageBoxStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  color: theme.colors.greylight01,
  marginRight: 64, // 16 space to time label + space time label right to box  8 + 40 size time
});

const outboundMessageBoxStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  color: theme.colors.greydark02,
  marginRight: 84, // 16 space to time label + space time label right to box  8 + 40 size time + read status 20px (space 4px + 16px icon)
});

const conversationTextMessage: ComponentThemeConfig = {
  baseStyle: messageBoxStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      inbound: inboundMessageBoxStyle,
      outbound: outboundMessageBoxStyle,
    },
  },
};

const textMessage = {
  conversationTextMessage,
};

export default textMessage;
