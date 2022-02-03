import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn, CSSObject } from '../../system';

const badgeBase: ComponentThemeConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
  },
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 500,
        height: '16px',
        borderRadius: '16px',
        px: 'xxs',
      },
      md: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 500,
        height: '24px',
        borderRadius: '24px',
        px: 'xs',
      },
    },
    variants: {
      default: {
        backgroundColor: 'greylight04',
        color: 'greymed04',
      },
      info: {
        backgroundColor: 'indigo01',
        color: 'indigo06',
      },
      warning: {
        backgroundColor: 'yellow01',
        color: 'yellow09',
      },
      critical: {
        backgroundColor: 'red01',
        color: 'red07',
      },
      success: {
        backgroundColor: 'green01',
        color: 'green07',
      },
      active: {
        backgroundColor: 'blue02',
        color: 'blue07',
      },
    },
  },
};

const signBadgeStyle: CSSObject = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderColor: 'white',
  backgroundColor: 'white',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  fontSize: '8px',
  fontWeight: '400',
  color: 'white',
  boxSizing: 'content-box',
};

const SignBadge: ComponentThemeConfig = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: signBadgeStyle,
  scales: {
    sizes: {
      // size = 10px (width + padding)
      sm: {
        width: '8px',
        height: '8px',
        borderWidth: '1px',
        borderRadius: '8px',
        // left: '14px', // avatarSize.sm - sizePresence
        // // sizePresence 8px + 2px (both side padding 1px)
      },
      md: {
        width: '12px',
        height: '12px',
        borderWidth: '2px',
        borderRadius: '12px',
        // left: '20px',
      },
      lg: {
        width: '16px',
        height: '16px',
        borderWidth: '2px',
        borderRadius: '16px',
        // left: '28px',
      },
    },
  },
};

const NotificationBadgeStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({
  theme,
}: {
  theme: DefaultTheme;
}) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderColor: 'white',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  background: theme.colors.red07,
  fontSize: '8px',
  fontWeight: '400',
  color: 'white',
  boxSizing: 'content-box',
  minWidth: '12px',
  height: '12px',
  padding: '2px',
  borderWidth: '2px',
  borderRadius: '16px',
});
const NotificationBadge: ComponentThemeConfig = {
  baseStyle: NotificationBadgeStyle,
};

const badge = {
  badge: badgeBase,
  signBadge: SignBadge,
  notificationBadge: NotificationBadge,
};

export default badge;
