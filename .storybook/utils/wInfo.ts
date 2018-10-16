import { withInfo, Options } from '@storybook/addon-info';
import { StoryDecorator } from '@storybook/react';
import { StoryState } from '@dump247/storybook-state';

import { variables } from '@kata-kit/theme';

import { H1, H2, P, H3, H4, H5, H6 } from '../components/Markdown';
import Wrapper from '../components/Wrapper';
import WithState from '../components/WithState';

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
      marginBottom: 0,
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
  info: {
    backgroundColor: variables.colors.white
  },
  infoBody: {
    padding: '32px 16px',
    margin: 0,
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

const wInfo = (config?: Options) => {
  // The new pattern for `withInfo()` is a decorator, however the typings
  // haven't caught up yet, so we have to cast this whole function as
  // `StoryDecorator` here.
  return withInfo(
    Object.assign(
      {},
      {
        inline: true,
        source: false,
        propTablesExclude: [WithState, StoryState, Wrapper],
        styles: wInfoStyle,
        components: wInfoComponents
      },
      config
    )
  ) as StoryDecorator;
};

export default wInfo;
