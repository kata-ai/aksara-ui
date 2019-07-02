import React from 'react';
import clsx from 'clsx';

export type AnyActionIcon =
  | string
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export default function renderIcon(Icon: AnyActionIcon, className?: string) {
  if (typeof Icon === 'string') {
    return <i className={clsx(className, `icon-${Icon}`)} />;
  }

  if (typeof Icon !== 'undefined') {
    return <Icon className={className} />;
  }

  return null;
}
