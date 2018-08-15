import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';
import { CardGrid, DashboardCard } from '@kata-kit/card';
import { Container } from '@kata-kit/layout';

const HeroImage = styled('img')`
  margin-bottom: ${variables.spaces.space3};
  max-width: 100%;
  height: 100%;
  max-height: 242px;
`;

const HomePage: React.SFC<RouteComponentProps<{}>> = ({ history }) => (
  <Root>
    <Inner>
      <Container>
        <HeroImage src={require('../images/kata-platform.svg')} />
        <h1>Kata Design System</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime
          inventore fuga.
        </p>
      </Container>
    </Inner>
    <InnerSecondary>
      <Container>
        <CardGrid>
          <DashboardCard
            title="Design Guidelines"
            onClick={() => history.push('/docs')}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DashboardCard>
          <DashboardCard
            title="kata-kit"
            onClick={() => history.push('/components')}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </DashboardCard>
          <DashboardCard
            title="Component Demo"
            onClick={() => history.push('/demo')}
          >
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </DashboardCard>
        </CardGrid>
      </Container>
    </InnerSecondary>
  </Root>
);

export default HomePage;

const Inner = styled('div')`
  padding: ${variables.spaces.space10} 48px;
  flex: 1 1 auto;
  text-align: center;
`;

// TODO: the `!important` is temporary until `@kata-kit/card` is properly themed
const InnerSecondary = styled('div')`
  padding: 0 48px ${variables.spaces.space10};
  flex: 1 1 auto;
  color: ${variables.colors.gray70} !important;

  h2 {
    color: ${variables.colors.gray70} !important;
  }
`;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    240deg,
    #00cce9,
    ${variables.colors.kataBlue},
    ${variables.colors.cobalt},
    #0044aa
  );

  h1 {
    font-weight: 300;
  }
`;
