import React from 'react';

export interface Props {
  children: any;
}

export default (props: Props) => (
  <div className="kata-drawer__footer">{props.children}</div>
);
