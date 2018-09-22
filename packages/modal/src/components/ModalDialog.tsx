import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { Theme } from '@kata-kit/theme';

import theme from '../theme';
import {
  ModalDialogStyles,
  WithThemeProps,
  ModalContentStyles
} from '../styles';
import { ModalProps } from './Modal';
import ModalContext from './ModalContext';

export interface DrawerBodyProps {
  className?: string;
}

const preventEventPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
  event.preventDefault(); // Stop onClick from modal wrapper bubbling up.
  event.stopPropagation(); // For real this time.
};

const ModalDialog: React.SFC<DrawerBodyProps> = ({ className, children }) => (
  <ModalContext.Consumer>
    {api => (
      <Theme values={theme}>
        {themeAttributes => (
          <Root
            className={classnames(
              api.show ? 'is-open' : 'is-closed',
              className
            )}
            theme={themeAttributes}
            onClick={preventEventPropagation}
          >
            <ModalContent theme={themeAttributes}>{children}</ModalContent>
          </Root>
        )}
      </Theme>
    )}
  </ModalContext.Consumer>
);

export default ModalDialog;

const ModalContent = styled('div')`
  ${(props: WithThemeProps<ModalProps>) => ModalContentStyles(props)};
`;

const Root = styled('div')`
  ${(props: WithThemeProps<ModalProps>) => ModalDialogStyles(props)};
`;
