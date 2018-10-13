import { withInfo, Options } from '@storybook/addon-info';
import { variables } from '@kata-kit/theme';
import { H1, H2, P, H3, H4, H5, H6 } from '../components/Markdown';

const wInfoStyle = {
  header: {
    h1: {
      fontSize: variables.fontSizes.peta,
      lineHeight: variables.lineHeights.peta,
      marginRight: '20px',
      display: 'inline',
      color: variables.colors.gray80
    },
    body: {
      paddingTop: 0,
      paddingBottom: variables.spacing.spacingXs,
      borderColor: variables.colors.gray30,
      fontSize: variables.fontSizes.kilo,
      lineHeight: variables.lineHeights.kilo
    },
    h2: {
      fontSize: variables.fontSizes.tera,
      lineHeight: variables.lineHeights.tera,
      display: 'inline',
      color: variables.colors.gray50
    }
  },
  infoBody: {
    padding: 0,
    border: 'none',
    fontSize: variables.fontSizes.kilo,
    lineHeight: variables.lineHeights.kilo
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
