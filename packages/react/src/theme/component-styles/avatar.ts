import type { ComponentThemeConfig } from '../../system';

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

const avatarStyle = {
  avatar,
};

export default avatarStyle;
