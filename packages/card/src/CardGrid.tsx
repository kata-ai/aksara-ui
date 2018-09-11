import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface CardGridProps {
  className?: string;
  centered?: boolean;
  cardsPerRow?: 2 | 3;
}

class CardGrid extends React.Component<CardGridProps> {
  render() {
    const { className, cardsPerRow = 3 } = this.props;
    return (
      <Wrapper className={classnames(className)}>
        {React.Children.map(
          this.props.children,
          Item =>
            Item ? (
              <CardWrapper cardsPerRow={cardsPerRow}>{Item}</CardWrapper>
            ) : (
              Item
            )
        )}
      </Wrapper>
    );
  }
}

export default CardGrid;

const Wrapper = styled<CardGridProps, 'div'>('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.615384615rem;
  justify-content: ${props => props.centered && 'center'};
`;

const CardWrapper = styled<CardGridProps, 'div'>('div')`
  flex: 0 1 100%;
  padding: 0 0.615384615rem;
  margin-bottom: 1.230769231rem;

  @media (min-width: ${variables.breaks.breakSmall}) {
    flex: 0 1 50%;
  }

  @media (min-width: ${variables.breaks.breakMedium}) {
    flex: ${props => (props.cardsPerRow === 3 ? '0 1 33.33%' : '0 1 50%')};
  }
`;
