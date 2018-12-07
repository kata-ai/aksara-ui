import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { Theme, variables } from '@kata-kit/theme';

export interface CardGridProps {
  /** Additional card CSS class. */
  className?: string;
  /** Whether the content inside card grid centered or not. */
  centered?: boolean;
  /** How many card will be rendered in a row. */
  cardsPerRow?: 2 | 3;
}

class CardGrid extends React.Component<CardGridProps> {
  static defaultProps = {
    cardsPerRow: 3
  };

  render() {
    const { className, cardsPerRow, ...rest } = this.props;
    return (
      <Theme>
        {themeAttributes => (
          <Wrapper
            className={classnames(className)}
            {...rest}
            {...themeAttributes}
          >
            {React.Children.map(this.props.children, Item =>
              Item ? (
                <CardWrapper
                  data-testid="CardGrid-wrapper"
                  cardsPerRow={cardsPerRow}
                >
                  {Item}
                </CardWrapper>
              ) : (
                Item
              )
            )}
          </Wrapper>
        )}
      </Theme>
    );
  }
}

export default CardGrid;

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.615384615rem;
  justify-content: ${props => props.centered && 'center'};
`;

const CardWrapper = styled('div')`
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
