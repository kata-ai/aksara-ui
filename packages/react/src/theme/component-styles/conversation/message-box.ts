import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn, CSSObject } from '../../../system';

const messageBoxStyle: CSSObject = {
  p: 'xxs',
  display: 'inline-block',
  borderRadius: 12,
  position: 'relative',
};

const inboundMessageBoxStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  backgroundColor: theme.colors.blue07,
  color: theme.colors.greylight01,
});

const outboundMessageBoxStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  backgroundColor: theme.colors.greylight01,
  color: theme.colors.greydark02,
});

const conversationMessageBox: ComponentThemeConfig = {
  baseStyle: messageBoxStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      inbound: inboundMessageBoxStyle,
      outbound: outboundMessageBoxStyle,
    },
  },
};

const conversationLikeStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({ theme }) => ({
  width: 24,
  height: 24,
  position: 'absolute',
  bottom: -12,
  fontSize: 12,
  backgroundColor: theme.colors.greylight01,
  borderRadius: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const conversationLike: ComponentThemeConfig = {
  baseStyle: conversationLikeStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      inbound: {
        right: 0,
      },
      outbound: {
        left: 0,
      },
    },
  },
};

const conversationTimeStyle: CSSObject = {
  position: 'absolute',
  bottom: 8,
  maxWidth: 48,
  fontSize: '10px',
  lineHeight: '16px',
  fontWeight: 400,
};
const conversationTime: ComponentThemeConfig = {
  baseStyle: conversationTimeStyle,
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      inbound: {
        right: 8,
      },
      outbound: {
        right: 28,
      },
    },
  },
};

const messageBox = {
  conversationMessageBox,
  conversationLike,
  conversationTime,
};

export default messageBox;
