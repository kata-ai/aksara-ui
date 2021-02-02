import React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';

import { theme } from '../../../theme';

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const Wrapper = styled('div')`
  display: block;
  position: relative;
  overflow: hidden;
  height: 20px;
  width: 100%;
  background: ${theme.colors.gray20};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${theme.colors.gray20}, ${theme.colors.gray10}, ${theme.colors.gray20});
    animation: ${progress} 1s ease-in-out infinite;
  }

  &.is-small {
    height: 16px !important;
  }
`;

const Multiline = styled('div')`
  ${Wrapper} {
    margin-bottom: ${theme.space.xs}px;

    &:last-child {
      width: 65%;
    }
  }
`;

export interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
  numberOfLines?: number;
  small?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className, numberOfLines, small }) => {
  if (numberOfLines && numberOfLines > 1) {
    return (
      <Multiline>
        {[...Array(numberOfLines)].map((_, i) => (
          <Wrapper key={i.toString()} className={clsx(className, small && 'is-small')} />
        ))}
      </Multiline>
    );
  }

  return <Wrapper className={clsx(className, small && 'is-small')} />;
};

Skeleton.defaultProps = {
  numberOfLines: 1,
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
