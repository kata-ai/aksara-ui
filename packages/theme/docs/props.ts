import { PropAttributesMap } from '@kata-kit/doc-utils';

export const themeProps: PropAttributesMap = {
  values: {
    description:
      'A <code>ThemeAttributes</code> object with the attributes you want to override.',
    type: 'ThemeAttributes'
  },
  children: {
    description:
      'Either a render prop with the the <code>ThemeAttributes</code> object passed, or a plain <code>KataReset</code> component',
    type: '((theme: ThemeAttributes) => JSX.Element) | React.ReactNode'
  }
};

export const themedComponentProps: PropAttributesMap = {
  color: {
    description:
      'The color key to look up from the <code>ThemeAttributesMap</code> object. Will default to the <code>defaultTheme</code> key if not set',
    type: 'string',
    defaultValue: 'defaultTheme'
  },
  themes: {
    description: 'A Record type of the ThemeAttributes for each color theme.',
    type: 'ThemeAttributesMap',
    required: true
  },
  children: {
    description:
      'Either a render prop with the the <code>ThemeAttributes</code> object passed, or a plain component which consumes <code>ThemeContext</code> (e.g. <code>KataReset</code>)',
    type: '((theme: ThemeAttributes) => JSX.Element) | React.ReactNode'
  }
};
