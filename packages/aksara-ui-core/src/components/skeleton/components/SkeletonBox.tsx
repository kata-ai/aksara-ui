import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '../../../utils';

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const Root = styled('div')`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: ${colors.gray20};
  border-radius: 8px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${colors.gray20}, ${colors.gray10}, ${colors.gray20});
    animation: ${progress} 1s ease-in-out infinite;
  }
`;

export interface SkeletonBoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({ className, style }) => {
  return <Root className={className} style={style} />;
};

SkeletonBox.displayName = 'SkeletonBox';

export default SkeletonBox;
