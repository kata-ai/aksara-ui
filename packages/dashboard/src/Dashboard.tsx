import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import { Tooltip, TooltipTarget } from '@kata-kit/tooltip';

export interface DashboardProps {
  title?: string;
  tooltip?: string;
  subTitle?: string;
  paragraph?: string;
  className?: string;
  isStarter?: boolean;
  headerContent?: any;
  image?: any;
  isHeadingCentered?: boolean;
}

export default class Dashboard extends React.Component<DashboardProps> {
  static defaultProps = {
    isStarter: false
  };

  renderStarter = () => {
    const {
      className,
      title,
      tooltip,
      subTitle,
      headerContent,
      image,
      children,
      isHeadingCentered
    } = this.props;
    return (
      <Root className={className}>
        <div className="kata-dashboard__heading kata-dashboard__heading--starter kata-dashboard--normalizer">
          <div
            className={classNames({
              'kata-dashboard__heading-content': true,
              'kata-dashboard__heading-content__centered': isHeadingCentered
            })}
          >
            <div className="kata-dashboard__header">
              <DashboardTitle isStarter>{title}</DashboardTitle>
              {tooltip && (
                <TooltipTarget component={<Tooltip>{tooltip}</Tooltip>}>
                  <i className="icon-info kata-dashboard__tooltip" />
                </TooltipTarget>
              )}
            </div>
            {subTitle && (
              <h2 className="kata-dashboard__subtitle title">{subTitle}</h2>
            )}
            {headerContent && (
              <div className="kata-dashboard__header-content kata-dashboard__header-content--starter">
                {headerContent}
              </div>
            )}
          </div>
          {image && (
            <div className="kata-dashboard__heading-image">
              <img src={image} alt="header-img" />
            </div>
          )}
        </div>

        <div className="kata-dashboard__content kata-dashboard__content--starter kata-dashboard--normalizer">
          {children}
        </div>
      </Root>
    );
  };

  render() {
    const {
      className,
      title,
      tooltip,
      subTitle,
      paragraph,
      headerContent,
      children,
      isStarter
    } = this.props;

    if (isStarter) {
      return this.renderStarter();
    }

    return (
      <Root className={className}>
        <DashboardHeader>
          {headerContent || (
            <Fragment>
              <DashboardTitle>{title}</DashboardTitle>
              {tooltip && (
                <TooltipTarget
                  trigger="hover"
                  component={<Tooltip>{tooltip}</Tooltip>}
                >
                  <DashboardTooltip className="icon-info" />
                </TooltipTarget>
              )}
            </Fragment>
          )}
        </DashboardHeader>
        {subTitle && (
          <h2 className="kata-dashboard__subtitle title">{subTitle}</h2>
        )}
        {paragraph && (
          <p className="kata-dashboard__paragraph body-text">{paragraph}</p>
        )}

        <div className="kata-dashboard__content mt-3">{children}</div>
      </Root>
    );
  }
}

const DashboardIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Root = styled('div')`
  padding: 1.846153846rem /* $space-3 */ 20px;
  animation: ${DashboardIn} 0.5s ease;
`;

const DashboardHeader = styled('div')`
  display: flex;
`;

const DashboardTooltip = styled('i')`
  flex: 0 0 auto;
  align-self: center;
  font-size: 20px;
  color: #676b6d /* $gray-60 */;
  margin-left: 0.615384615rem /* $space-1 */;

  &::before {
    vertical-align: middle;
  }

  &:hover {
    color: black;
  }
`;

const DashboardTitle = styled<DashboardProps, 'h1'>('h1')`
  margin-bottom: 0;
  flex: 0 0 auto;
  color: ${props => props.isStarter && 'white'};
`;
