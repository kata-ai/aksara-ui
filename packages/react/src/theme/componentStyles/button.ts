import type { ComponentThemeConfig, CSSObject } from '../../system';

const baseStyle: CSSObject = {
  margin: 0,
  padding: 0,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  background: 'none',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0.2px',
  border: '1px solid transparent',
  borderRadius: 8,
  '&:not([disabled])': {
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
};

const primaryAndSecondaryVariants: Record<string, CSSObject> = {
  primary: {
    '&:not(:disabled)': {
      backgroundColor: 'blue07',
      color: 'greylight01',
      '&:hover, &:focus': {
        backgroundColor: 'blue08',
      },
      '&:active': {
        backgroundColor: 'blue09',
      },
    },
    '&:disabled': {
      backgroundColor: 'greylight05',
      color: 'greylight01',
    },
  },
  secondary: {
    '&:not(:disabled)': {
      borderColor: 'greylight04',
      backgroundColor: 'greylight03',
      color: 'greydark02',
      '&:hover, &:focus': {
        backgroundColor: 'greylight04',
      },
    },
    '&:disabled': {
      backgroundColor: 'greylight03',
      borderColor: 'greylight04',
      color: 'greymed01',
    },
  },
  'segment-item': ({ selected }: { selected?: boolean }) => ({
    '&:not(:disabled)': {
      backgroundColor: selected ? 'blue01' : 'greylight03',
      borderColor: selected ? 'blue07' : 'transparent',
      color: selected ? 'blue07' : 'greymed04',
      '&:hover, &:focus': {
        color: selected ? 'blue07' : 'greydark02',
        backgroundColor: selected ? 'blue01' : 'greylight04',
      },
    },
    '&:disabled': {
      backgroundColor: 'greylight03',
      color: 'greymed01',
    },
  }),
};

export const buttonBase: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        height: '24px',
        py: 'xxs',
        px: 'xs',
      },
      md: {
        height: '32px',
        py: 'xs',
        px: 'sm',
      },
      lg: {
        height: '40px',
        py: 'sm',
        px: 'md',
      },
    },
    variants: {
      ...primaryAndSecondaryVariants,
      destructive: {
        '&:not(:disabled)': {
          backgroundColor: 'red07',
          color: 'greylight01',
        },
        '&:disabled': {
          backgroundColor: 'greylight05',
          color: 'greylight01',
        },
      },
      'outline-destructive': {
        '&:not(:disabled)': {
          borderColor: 'red07',
          color: 'red07',
          '&:hover': {
            backgroundColor: 'rgba(255, 219, 214, 0.8)',
          },
        },
        '&:disabled': {
          borderColor: 'greylight04',
          color: 'greymed01',
        },
      },
    },
  },
};

export const iconButton: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      sm: {
        width: '24px',
        height: '24px',
        '> svg': {
          width: '16px',
          height: '16px',
        },
      },
      md: {
        width: '32px',
        height: '32px',
        '> svg': {
          width: '16px',
          height: '16px',
        },
      },
      lg: {
        width: '40px',
        height: '40px',
        '> svg': {
          width: '20px',
          height: '20px',
        },
      },
    },
    variants: {
      ...primaryAndSecondaryVariants,
      'outline-destructive': {
        '&:not(:disabled)': {
          borderColor: 'red07',
          color: 'red07',
          '&:hover, &:focus': {
            backgroundColor: 'rgba(255, 219, 214, 0.8)',
          },
        },
        '&:disabled': {
          borderColor: 'greylight04',
          color: 'greymed01',
        },
      },
      plain: {
        '&:not(:disabled)': {
          color: 'greymed04',
          '&:hover, &:focus': {
            backgroundColor: 'greylight03',
          },
        },
        '&:disabled': {
          color: 'greymed01',
        },
      },
      'plain-destructive': {
        '&:not(:disabled)': {
          color: 'red07',
          '&:hover': {
            backgroundColor: 'red01',
          },
          '&:focus': {
            backgroundColor: 'rgba(255, 219, 214, 0.8)',
          },
        },
        '&:disabled': {
          color: 'greymed01',
        },
      },
    },
  },
};

export const plainButton: ComponentThemeConfig = {
  baseStyle: {
    ...baseStyle,
    '> svg': {
      width: '16px',
      height: '16px',
    },
    '&:disabled': {
      color: 'greymed01',
    },
  },
  propToScaleMap: [
    ['variant', 'variants'],
    ['size', 'sizes'],
  ],
  scales: {
    sizes: {
      sm: {
        fontSize: '14px',
        lineHeight: '22px',
      },
      md: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
    variants: {
      primary: {
        '&:not(:disabled)': {
          color: 'blue07',
          '&:hover': {
            color: 'blue08',
            '> span': {
              textDecoration: 'underline',
            },
          },
          '&:focus': {
            backgroundColor: 'greylight03',
            color: 'blue09',
            '> span': {
              textDecoration: 'underline',
            },
          },
        },
      },
      disclosure: {
        '&:not(:disabled)': {
          color: 'greydark02',
          '&:hover': {
            color: 'greydark02',
            '> span': {
              textDecoration: 'underline',
            },
          },
          '&:focus': {
            backgroundColor: 'greylight03',
            color: 'greydark02',
            '> span': {
              textDecoration: 'underline',
            },
          },
        },
      },
      destructive: {
        '&:not(:disabled)': {
          color: 'red07',
          '&:hover': {
            color: 'red08',
            '> span': {
              textDecoration: 'underline',
            },
          },
          '&:focus': {
            backgroundColor: 'greylight03',
            color: 'red09',
            '> span': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  },
};

export const unstyledButton: ComponentThemeConfig = {
  baseStyle: {
    width: 'auto',
    margin: 0,
    padding: 0,
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    // Normalizes line height & removes center align
    lineHeight: 'normal',
    textAlign: 'inherit',

    // Corrects font smoothing for webkit
    WebkitFontSmoothing: 'inherit',
    MozOsxFontSmoothing: 'inherit',

    // Corrects inability to style clickable \`input\` types in iOS
    WebkitAppearance: 'none',

    // Remove excess padding and border in Firefox 4+
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0,
    },
  },
};

const button = {
  buttonBase,
  iconButton,
  plainButton,
  unstyledButton,
};

export default button;
