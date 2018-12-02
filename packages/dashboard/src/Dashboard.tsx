import * as React from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import { Container } from '@kata-kit/layout';
import { Theme } from '@kata-kit/theme';
import { Tooltip, TooltipTarget } from '@kata-kit/tooltip';
import { variables } from '@kata-kit/theme';

export interface DashboardProps {
  /** Dashboard title element. */
  title?: string;
  /** Dashboard tooltip element. */
  tooltip?: string;
  /** Dashboard subtitle element. */
  subTitle?: string;
  /** Dashboard description. */
  paragraph?: string;
  /** Additional dashboard CSS class. */
  className?: string;
  /** Whether dashboard is starter or not. */
  isStarter?: boolean;
  /** Dashboard header content element. */
  headerContent?: any;
  /** Dashboard image element. */
  image?: any;
  /** Whether dashboard header centered or not. */
  isHeadingCentered?: boolean;
}

export default class Dashboard extends React.Component<DashboardProps> {
  static defaultProps = {
    isStarter: false
  };

  constructor(props: DashboardProps) {
    super(props);

    this.renderStarter = this.renderStarter.bind(this);
  }

  renderStarter() {
    const {
      className,
      title,
      tooltip,
      subTitle,
      headerContent,
      image,
      children,
      isStarter
    } = this.props;

    return (
      <Theme>
        {themeAttributes => (
          <Root
            className={classNames(className, isStarter && 'is-starter')}
            {...themeAttributes}
          >
            <DashboardStarterHeading>
              <Container>
                <DashboardStarterInner>
                  <DashboardStarterLeft>
                    <DashboardHeader>
                      <DashboardContainer>
                        <DashboardTitle isStarter data-testid="Dashboard-title">
                          {title}
                        </DashboardTitle>
                        {tooltip && (
                          <TooltipTarget
                            component={<Tooltip>{tooltip}</Tooltip>}
                          >
                            <DashboardTooltip className="icon-info" />
                          </TooltipTarget>
                        )}
                      </DashboardContainer>
                    </DashboardHeader>
                    {subTitle && (
                      <DashboardSubtitle isStarter>
                        {subTitle}
                      </DashboardSubtitle>
                    )}
                    {headerContent && (
                      <DashboardHeaderContent>
                        {headerContent}
                      </DashboardHeaderContent>
                    )}
                  </DashboardStarterLeft>
                  {image && (
                    <DashboardStarterImage>
                      <img src={image} alt="header-img" />
                    </DashboardStarterImage>
                  )}
                </DashboardStarterInner>
              </Container>
            </DashboardStarterHeading>

            <DashboardContent>
              <Container data-testid="Dashboard-content">{children}</Container>
            </DashboardContent>
          </Root>
        )}
      </Theme>
    );
  }

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
      <Theme>
        {themeAttributes => (
          <Root className={className} {...themeAttributes}>
            <Container>
              <DashboardHeader>
                {headerContent || (
                  <DashboardContainer>
                    <DashboardTitle data-testid="Dashboard-title">
                      {title}
                    </DashboardTitle>
                    {tooltip && (
                      <TooltipTarget
                        trigger="hover"
                        component={<Tooltip>{tooltip}</Tooltip>}
                      >
                        <DashboardTooltip className="icon-info" />
                      </TooltipTarget>
                    )}
                  </DashboardContainer>
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

              <DashboardContent data-testid="Dashboard-content">
                {children}
              </DashboardContent>
            </Container>
          </Root>
        )}
      </Theme>
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

const DashboardContainer = styled(Container)``;

const DashboardHeader = styled('div')`
  ${DashboardContainer} {
    display: flex;
  }
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

const DashboardTitle = styled('h1')`
  margin-bottom: 0;
  flex: 0 0 auto;
  color: ${props => props.isStarter && 'white'};
`;

const DashboardSubtitle = styled('h2')`
  color: ${props => props.isStarter && 'white'};
`;

const DashboardParagraph = styled('p')`
  &:not(.is-starter) {
    margin-top: 8px;
    word-wrap: break-word;
    color: #fff !important;
    font-weight: 300;
  }
`;

const DashboardStarterInner = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px /* $break-medium */) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const DashboardStarterLeft = styled('div')`
  width: 100%;
  max-width: 480px;
`;

const DashboardStarterImage = styled('div')`
  display: none;
  height: 100%;
  max-height: 184px;

  @media (min-width: 1024px /* $break-medium */) {
    display: block;
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
  padding-top: ${variables.spaces.space3};
`;

const DashboardStarterHeading = styled('div')`
  display: flex;
  padding: 40px 20px 136px;
  background-color: #006fe6 /* $kata-blue */;

  @media (min-width: 1280px /* $break-medium */) {
    padding: 40px 40px 136px;
  }

  @media (min-width: 1366px /* $break-large */) {
    padding: 48px 48px 136px;
  }
`;

const Root = styled('div')`
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

  &.is-starter {
    ${DashboardHeader} {
      h1 {
        color: #fff;
      }
    }

    ${DashboardContent} {
      margin-top: -100px !important;
      padding-top: 0 !important;
    }
  }
`;
