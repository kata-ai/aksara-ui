import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

export const avatarSizeOptions = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 64,
};
const avatar: ComponentThemeConfig = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '1px solid',
    borderColor: 'white',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
  },
  scales: {
    sizes: {
      sm: {
        width: avatarSizeOptions.sm,
        height: avatarSizeOptions.sm,
        borderRadius: avatarSizeOptions.sm,
      },
      md: {
        width: avatarSizeOptions.md,
        height: avatarSizeOptions.md,
        borderRadius: avatarSizeOptions.md,
      },
      lg: {
        width: avatarSizeOptions.lg,
        height: avatarSizeOptions.lg,
        borderRadius: avatarSizeOptions.lg,
      },
      xl: {
        width: avatarSizeOptions.xl,
        height: avatarSizeOptions.xl,
        borderRadius: avatarSizeOptions.xl,
      },
    },
  },
};

const avatarPresenceBaseStyle: ComponentThemeScaleFn<{ theme: DefaultTheme }> = ({
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
  position: 'absolute',
  background: theme.colors.red07,
  fontSize: '8px',
  fontWeight: '400',
  color: 'white',
  boxSizing: 'content-box',
});

const avatarPresence: ComponentThemeConfig = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['position', 'positions'],
  ],
  baseStyle: avatarPresenceBaseStyle,
  scales: {
    sizes: {
      // size = 10px (width + padding)
      sm: {
        minWidth: '8px',
        height: '8px',
        padding: '1px',
        borderWidth: '1px',
        borderRadius: '8px',
        left: '14px', // avatarSize.sm - sizePresence
        // sizePresence 8px + 2px (both side padding 1px)
      },
      md: {
        minWidth: '8px',
        height: '8px',
        padding: '2px',
        borderWidth: '2px',
        borderRadius: '12px',
        left: '20px',
      },
      lg: {
        minWidth: '8px',
        height: '8px',
        padding: '2px',
        borderWidth: '2px',
        borderRadius: '12px',
        left: '28px',
      },
      xl: {
        minWidth: '12px',
        height: '12px',
        padding: '2px',
        borderWidth: '2px',
        borderRadius: '16px',
        left: '48px',
        fontSize: '12px',
      },
    },
    positions: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
  },
};
const avatarStyle = {
  avatar,
  avatarPresence,
};

export default avatarStyle;
