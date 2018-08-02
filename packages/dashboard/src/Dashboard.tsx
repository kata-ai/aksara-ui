import React, { Fragment } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import { Container } from '@kata-kit/layout';
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
      isStarter,
      isHeadingCentered
    } = this.props;
    return (
      <Root className={classNames(className, isStarter && 'is-starter')}>
        <DashboardStarterHeading>
          <Container>
            <div
              className={classNames({
                'kata-dashboard__heading-content': true,
                'kata-dashboard__heading-content__centered': isHeadingCentered
              })}
            >
              <DashboardHeader>
                <DashboardTitle isStarter>{title}</DashboardTitle>
                {tooltip && (
                  <TooltipTarget component={<Tooltip>{tooltip}</Tooltip>}>
                    <DashboardTooltip className="icon-info" />
                  </TooltipTarget>
                )}
              </DashboardHeader>
              {subTitle && (
                <DashboardSubtitle isStarter>{subTitle}</DashboardSubtitle>
              )}
              {headerContent && (
                <DashboardHeaderContent>{headerContent}</DashboardHeaderContent>
              )}
            </div>
            {image && (
              <div className="kata-dashboard__heading-image">
                <img src={image} alt="header-img" />
              </div>
            )}
          </Container>
        </DashboardStarterHeading>

        <DashboardContent className={classNames(isStarter && 'is-starter')}>
          <Container>{children}</Container>
        </DashboardContent>
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
        <Container>
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
          {subTitle && <DashboardSubtitle>{subTitle}</DashboardSubtitle>}
          {paragraph && (
            <DashboardParagraph
              className={classNames(isStarter && 'is-starter')}
            >
              {paragraph}
            </DashboardParagraph>
          )}

          <DashboardContent>{children}</DashboardContent>
        </Container>
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

const Root = styled<DashboardProps, 'div'>('div')`
  animation: ${DashboardIn} 0.5s ease;

  &:not(.is-starter) {
    padding: 1.846153846rem /* $space-3 */ 20px;

    @media (min-width: 1280px /* $break-medium */) {
      padding: 1.846153846rem /* $space-3 */ 40px;
    }

    @media (min-width: 1366px /* $break-large */) {
      padding: 1.846153846rem /* $space-3 */ 48px;
    }
  }
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

const DashboardSubtitle = styled<DashboardProps, 'h2'>('h2')`
  color: ${props => props.isStarter && 'white'};
`;

const DashboardParagraph = styled('p')`
  &:not(.is-starter) {
    margin-top: 8px;
    max-width: 480px;
    word-wrap: break-word;
    color: #fff !important;
    font-weight: 300;
  }
`;

const DashboardHeaderContent = styled('div')`
  &:not(.is-starter) {
    margin-top: 8px;
    max-width: 480px;
    word-wrap: break-word;
    color: #fff !important;
    font-weight: 300;
  }

  & p {
    margin-top: 8px;
    max-width: 480px;
    word-wrap: break-word;
    color: #fff !important;
    font-weight: 300;
  }
`;

const DashboardContent = styled('div')`
  padding: 1.846153846rem /* $space-3 */ 20px;

  @media (min-width: 1280px /* $break-medium */) {
    padding: 1.846153846rem /* $space-3 */ 40px;
  }

  @media (min-width: 1366px /* $break-large */) {
    padding: 1.846153846rem /* $space-3 */ 48px;
  }

  &.is-starter {
    margin-top: -100px !important;
    padding-top: 0 !important;
  }
`;

const DashboardStarterHeading = styled('div')`
  display: flex;
  padding: 20px 20px 136px;
  background-color: #006fe6 /* $kata-blue */;

  @media (min-width: 1280px /* $break-medium */) {
    padding: 40px 40px 136px;
  }

  @media (min-width: 1366px /* $break-large */) {
    padding: 48px 48px 136px;
  }
`;
