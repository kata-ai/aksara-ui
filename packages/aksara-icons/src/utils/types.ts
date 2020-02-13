import * as React from 'react';

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const iconDefaultProps: BaseIconProps = {
  size: 24,
  fill: '#313f4e',
};
