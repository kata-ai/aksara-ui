import * as React from 'react';
import styled from 'styled-components';

export interface BoardProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional content as a header. */
  headingChildren?: React.ReactNode;
  /** Additional styles for board header */
  headingStyles?: React.CSSProperties;
  /** Additional content as a footer. */
  footerChildren?: React.ReactNode;
  /** Additional styles for board footer */
  footerStyles?: React.CSSProperties;
}

export default class Board extends React.Component<BoardProps> {
  render() {
    const { className, children } = this.props;
    return (
      <Root className={className}>
        {this.renderHeading()}
        <Body>{children}</Body>
        {this.renderFooter()}
      </Root>
    );
  }

  renderHeading() {
    if (this.props.headingChildren) {
      return (
        <Heading style={this.props.headingStyles}>
          {this.props.headingChildren}
        </Heading>
      );
    }
    return null;
  }

  renderFooter() {
    if (this.props.footerChildren) {
      return (
        <Footer style={this.props.footerStyles}>
          {this.props.footerChildren}
        </Footer>
      );
    }
    return null;
  }
}

const Root = styled('div')`
  background-color: #fff /* $white */;
  border-radius: 6px /* $border-radius-medium */;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25) /* $layer-100-shadow */;
`;

const Heading = styled('div')`
  padding: 24px 40px;
  border-bottom: 1px solid #e2e6e8 /* $gray-30 */;
`;

const Body = styled('div')`
  padding: 24px 40px;
`;

const Footer = styled('div')`
  padding: 24px 40px;
  border-top: 1px solid #e2e6e8 /* $gray-30 */;
`;
