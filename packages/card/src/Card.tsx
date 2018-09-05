import React, { CSSProperties } from 'react';
import styled from 'styled-components';

export interface CardProps {
  /** Card title. */
  title?: string;
  /** An action button. Can be a dropdown, or anything. */
  action?: any;
  asButton?: boolean;
  noWrap?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: any;
  style?: CSSProperties;
  /** Space for the avatar. */
  avatar?: any;
}

/**
 * A simple card element.
 */
export class Card extends React.Component<CardProps> {
  render() {
    const { className, noWrap, onClick, style, children } = this.props;

    return noWrap ? (
      <CardRoot onClick={onClick} style={style} className={className}>
        {children}
      </CardRoot>
    ) : (
      <CardRoot onClick={onClick} style={style} className={className}>
        {!this.props.asButton && this.props.title ? (
          <CardHeading>
            <CardHeadingTitle>
              {this.props.avatar && (
                <img
                  src={this.props.avatar}
                  className="kata-card__avatar mr-1"
                />
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
        <CardBody asButton={this.props.asButton}>{children}</CardBody>
      </CardRoot>
    );
  }
}

export default Card;

interface CardRootProps {
  disabled?: boolean;
}

const CardRoot = styled('div')`
  display: flex;
  flex-direction: column;
  background: ${(props: CardRootProps) =>
    props.disabled ? '#f6f7f8' : '#fff'};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const CardHeading = styled('div')`
  padding: 16px 16px 8px 24px;
  display: flex;
`;

const CardHeadingTitle = styled('h2')`
  flex: 1 0 auto;
  margin: 0;
`;

const CardHeadingAction = styled('div')`
  flex: 0 1 auto;
`;

interface CardBodyProps {
  asButton?: boolean;
}

const CardBody = styled<CardBodyProps, 'div'>('div')`
  padding: 8px 24px;
  font-size: 13px;
  line-height: 20px;
`;
