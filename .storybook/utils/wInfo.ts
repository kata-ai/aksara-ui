import { withInfo, Options } from '@storybook/addon-info';
import { variables } from '@kata-kit/theme';
import { H1, H2, P, H3, H4, H5, H6 } from '../components/Markdown';

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      display: 'inline',
      color: variables.colors.gray80,
      fontSize: variables.fontProps.h1FontSize,
      lineHeight: variables.fontProps.h1LineHeight
    },
    body: {
      paddingTop: 0,
      paddingBottom: '10px',
      borderColor: variables.colors.gray30,
      fontSize: variables.fontProps.rootFontSize,
      lineHeights: variables.fontProps.rootLineHeight
    },
    h2: {
      display: 'inline',
      color: variables.colors.gray50,
      fontSize: variables.fontProps.titleFontSize,
      lineHeight: variables.fontProps.titleLineHeight
    }
  },
  infoBody: {
    padding: 0,
    border: 'none',
    fontSize: variables.fontProps.rootFontSize,
    lineHeights: variables.fontProps.rootLineHeight
  }
};

const wInfoComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P
};

const wInfo = (text, config?: Options) =>
  withInfo(Object.assign(
    {},
    {
      styles: wInfoStyle,
      components: wInfoComponents,
      text: text
    },
    config
  ) as any);

export default wInfo;
