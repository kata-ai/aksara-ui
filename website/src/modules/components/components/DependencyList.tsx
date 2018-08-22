import React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

import { DependencyMetadata } from '../../../types/packages';

interface DependencyListProps {
  title?: string;
  dependencies: DependencyMetadata[];
}

const DependencyList: React.SFC<DependencyListProps> = ({
  title,
  dependencies
}) => (
  <DepsBlock>
    <h2>{title || 'Dependencies'}</h2>
    <Dependencies>
      {dependencies.map(d => (
        <li key={d.name}>
          <code>{`"${d.name}": "${d.version}"`}</code>
        </li>
      ))}
    </Dependencies>
    <Hr />
  </DepsBlock>
);

export default DependencyList;

const Hr = styled('hr')`
  margin: ${variables.spaces.space4} 0;
  border: none;
  border-bottom: 1px solid ${variables.colors.gray30};
`;

const DepsBlock = styled('div')`
  h2 {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Dependencies = styled('ul')`
  padding-left: 0;
  list-style-type: none;
`;
