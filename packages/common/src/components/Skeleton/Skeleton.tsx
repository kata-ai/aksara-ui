import React from 'react';
import classnames from 'classnames';

import { variables } from '@kata-kit/theme';
import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS styles to give to the component. */
  style?: React.CSSProperties;
  /** Number of lines of the skeleton. Defaults to 1. */
  numberOfLines?: number;
  /** Render in small text size. */
  small?: boolean;
}

const Skeleton: React.SFC<SkeletonProps> = ({
  className,
  numberOfLines,
  small
}) => {
  if (numberOfLines && numberOfLines > 1) {
    return (
      <MultilineWrapper data-testid="Skeleton-multiline">
        {[...Array(numberOfLines)].map((_, i) => (
          <Root
            key={i}
            className={classnames(small && 'is-small', className)}
            data-testid="Skeleton-root"
          />
        ))}
      </MultilineWrapper>
    );
  }

  return (
    <Root
      className={classnames(small && 'is-small', className)}
      data-testid="Skeleton-root"
    />
  );
};

Skeleton.defaultProps = {
  className: undefined,
  style: undefined,
  small: false,
  numberOfLines: 1
};

export default Skeleton;

const Progress = keyframes`
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
  height: 20px;
  width: 100%;
  background: ${variables.colors.gray20};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${variables.colors.gray20},
      ${variables.colors.gray10},
      ${variables.colors.gray20}
    );
    animation: ${Progress} 1s ease-in-out infinite;
  }

  &.is-small {
    height: 16px !important;
  }
`;

const MultilineWrapper = styled('div')`
  ${Root} {
    margin-bottom: ${variables.spaces.space2};

    &:last-child {
      width: 65%;
    }
  }
`;
