import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import DrawerContext from './DrawerContext';

interface Props {
  children: any;
  className?: string;
}

class DrawerBody extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <DrawerContext.Consumer>
        {api => (
          <Scrollbars onScrollFrame={scroll => api.watchOverflow(scroll.top)}>
            <div className={`kata-drawer__body ${this.props.className || ''}`}>
              {this.props.children}
            </div>
          </Scrollbars>
        )}
      </DrawerContext.Consumer>
    );
  }
}

export default DrawerBody;
