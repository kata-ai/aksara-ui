import * as React from 'react';
import GlobalStyles from './GlobalStyles';
import { Theme } from '../../../Theme';

interface ResetProps {
  className?: string;
  style?: React.CSSProperties;
}

export default class AksaraReset extends React.Component<ResetProps> {
  render() {
    const { children } = this.props;

    return (
      <Theme>
        <GlobalStyles />
        {children}
      </Theme>
    );
  }
}
