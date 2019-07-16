import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';

export interface DashboardCardsProps {
  /** Additional card CSS class. */
  className?: string;
  /** Whether the content inside card grid centered or not. */
  centered?: boolean;
  /**
   * How many card will be rendered in a row.
   *
   * @deprecated in the future, this will be automatically determined based on
   * breakpoint.
   */
  cardsPerRow?: 2 | 3;
}

export class DashboardCards extends React.Component<DashboardCardsProps> {
  static defaultProps = {
    cardsPerRow: 3
  };

  render() {
    const { className, cardsPerRow, ...rest } = this.props;
    return (
      <Wrapper className={classnames(className)} {...rest}>
        {React.Children.map(this.props.children, Item =>
          Item ? (
            <CardWrapper
              data-testid="CardGrid-wrapper"
              cardsPerRow={cardsPerRow}
            >
              {React.cloneElement(Item as React.ReactElement<any>, {
                dashboardCard: true
              })}
            </CardWrapper>
          ) : (
            Item
          )
        )}
      </Wrapper>
    );
  }
}

export default DashboardCards;

const Wrapper = styled('div')<DashboardCardsProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.615384615rem;
  justify-content: ${props => props.centered && 'center'};
`;

const CardWrapper = styled('div')<DashboardCardsProps>`
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
