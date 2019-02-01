import * as React from 'react';
import styled, { css } from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface CardProps {
  /** Card title. */
  title?: string;
  /** Card action element. Can be any valid React element. */
  action?: React.ReactElement<HTMLAllCollection>;
  /** Whether render the card as button. */
  asButton?: boolean;
  /** Whether or not the card is a dashboard card. */
  dashboardCard?: boolean;
  /** Whether render the card without header. */
  noWrap?: boolean;
  /** Whether the card disabled or not. */
  disabled?: boolean;
  /** Additional component CSS class. */
  className?: string;
  /** Card onClick event handler. */
  onClick?: any;
  /** `true` if the card body has a flex container. */
  flex?: boolean;
  /** Card additional CSS styles. */
  style?: React.CSSProperties;
  /**
   * Space for the avatar.
   *
   * @deprecated use `avatarComponent` instead.
   */
  avatar?: any;
  /** Space for the avatar component. */
  avatarComponent?: React.ReactNode;
}

/**
 * A simple card element.
 */
export class Card extends React.Component<CardProps> {
  render() {
    const {
      className,
      asButton,
      dashboardCard,
      noWrap,
      onClick,
      style,
      children
    } = this.props;

    return noWrap ? (
      <CardRoot
        asButton={asButton}
        dashboardCard={dashboardCard}
        onClick={onClick}
        style={style}
        className={className}
      >
        {children}
      </CardRoot>
    ) : (
      <CardRoot
        asButton={asButton}
        dashboardCard={dashboardCard}
        onClick={onClick}
        style={style}
        className={className}
      >
        {!this.props.asButton && this.props.title ? (
          <CardHeading>
            <CardHeadingTitle>
              {this.props.avatarComponent ? (
                <CardAvatarWrapper>
                  {this.props.avatarComponent}
                </CardAvatarWrapper>
              ) : (
                this.props.avatar && <CardAvatar src={this.props.avatar} />
              )}
              <span>{this.props.title}</span>
            </CardHeadingTitle>
            {this.props.action && (
              <CardHeadingAction
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {this.props.action}
              </CardHeadingAction>
            )}
          </CardHeading>
        ) : null}
        <CardBody asButton={this.props.asButton} flex={this.props.flex}>
          {children}
        </CardBody>
      </CardRoot>
    );
  }
}

export default Card;

const PointerCursor = css`
  cursor: pointer;
`;

const AsButton = css`
  justify-content: center;
`;

const AsDashboard = css`
  height: 100%;
  min-height: 200px;

  @media (min-width: ${variables.breaks.breakSmall}) {
    max-height: 200px;
  }
`;

const CardRoot = styled('div')`
  display: flex;
  flex-direction: column;
  background: ${(props: CardProps) =>
    props.disabled ? variables.colors.gray10 : variables.colors.white};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: all 0.3s ease;
  word-wrap: break-word;
  ${(props: CardProps) => props.asButton && PointerCursor};
  ${(props: CardProps) => props.dashboardCard && AsDashboard};
  ${(props: CardProps) => props.asButton && AsButton};

  &:hover {
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const CardHeading = styled('div')`
  display: flex;
  align-items: center;
  padding: 16px 16px 8px 24px;
  min-height: 56px;
`;

const CardHeadingTitle = styled('h2')`
  flex: 1 0 auto;
  margin: 0;
`;

const CardHeadingAction = styled('div')`
  flex: 0 1 auto;
`;

const CardAsButton = css`
  align-self: center;
`;

const CardAsFlex = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 24px;
`;

const CardBody = styled('div')`
  padding: 8px 24px;
  font-size: 13px;
  line-height: 20px;

  ${(props: CardProps) => props.asButton && CardAsButton}
  ${(props: CardProps) => props.flex && CardAsFlex}
`;

const CardAvatar = styled('img')`
  width: 40px;
  height: 40px;
  border: solid 1px ${variables.colors.gray30};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

const CardAvatarWrapper = styled('div')`
  display: inline-block;
  margin-right: 8px;
`;
