import React, { Fragment } from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';
import { Badge } from '@kata-kit/badge';

import { PropAttributesMap } from '../types/props';

interface PropsProps {
  props: PropAttributesMap;
}

const Props: React.SFC<PropsProps> = ({ props }) => (
  <Root>
    {Object.keys(props).map(p => {
      const prop = props[p];

      return (
        <Prop>
          <Header>
            <PropName>
              {p}
              {!prop.required && '?'}:
            </PropName>{' '}
            <PropType>{prop.type}</PropType>
            {prop.defaultValue && (
              <Fragment>
                {' '}
                <PropDefault>= {prop.defaultValue}</PropDefault>
              </Fragment>
            )}
          </Header>
          <PropBody>
            {prop.deprecated && (
              <PropDeprecated>
                <Badge color="warning">deprecated</Badge>
              </PropDeprecated>
            )}
            <div dangerouslySetInnerHTML={{ __html: prop.description }} />
            {prop.oneOf && (
              <PropUnion>
                <code>
                  type {prop.type} = {prop.oneOf.join(' | ')}
                </code>
              </PropUnion>
            )}
          </PropBody>
        </Prop>
      );
    })}
  </Root>
);

export default Props;

const PropName = styled('code')`
  background-color: ${variables.colors.special04} !important;
`;

const PropUnion = styled('div')`
  margin-top: ${variables.spaces.space1};
`;

const PropType = styled('code')`
  background-color: ${variables.colors.special06} !important;
`;

const PropDefault = styled('code')`
  background-color: none;
`;

const PropBody = styled('div')`
  padding: ${variables.spaces.space1} ${variables.spaces.space2};
`;

const PropDeprecated = styled('div')`
  margin-bottom: ${variables.spaces.space1};
`;

const Header = styled('div')`
  padding: ${variables.spaces.space1} ${variables.spaces.space2};
  background-color: ${variables.colors.gray10};
`;

const Prop = styled('div')`
  border: 1px solid ${variables.colors.gray30};
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};
  overflow: hidden;

  code {
    background-color: ${variables.colors.gray10};
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 90%;
  }
`;

const Root = styled('div')`
  margin: ${variables.spaces.space2} 0;

  ${Prop} {
    &:not(:last-child) {
      margin-bottom: ${variables.spaces.space2};
    }
  }
`;
