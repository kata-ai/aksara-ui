import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

export const avatarSizeOptions = {
  sm: 24,
  md: 32,
  lg: 40,
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
        width: '24px',
        height: '24px',
        borderRadius: '24px',
      },
      md: {
        width: '32px',
        height: '32px',
        borderRadius: '32px',
      },
      lg: {
        width: '40px',
        height: '40px',
        borderRadius: '40px',
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
  left: '65%',
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
      sm: {
        minWidth: '8px',
        height: '8px',
        padding: '1px',
        borderWidth: '1px',
        borderRadius: '8px',
      },
      md: {
        minWidth: '10px',
        height: '10px',
        padding: '1px',
        borderWidth: '2px',
        borderRadius: '12px',
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
