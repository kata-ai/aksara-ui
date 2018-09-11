import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  image?: string;
  title?: string | React.ReactElement<any>;
}

export default class EmptyMessage extends React.Component<Props> {
  static defaultProps = {
    image: require('@kata-kit/assets/images/form-empty.svg'),
    title: 'Empty'
  };

  render() {
    return (
      <Wrapper>
        <img src={this.props.image} alt="Empty Message" />
        <Title>{this.props.title}</Title>
        <Description>{this.props.children}</Description>
      </Wrapper>
    );
  }
}

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Title = styled('h3')`
  margin: 24px 0 8px;
  text-align: center;
  color: #24282d;
`;

const Description = styled('p')`
  margin-top: 8px;
  margin-bottom: 0;
  text-align: center;
  color: #484c4f;
`;

const Wrapper = styled('div')`
  animation: ${FadeIn} 0.75s ease;
  max-width: 320px;
  margin: 48px auto;
  text-align: center;

  ${Title} {
    font-weight: 500;
  }

  ${Description} {
    font-weight: 300;
  }
`;
