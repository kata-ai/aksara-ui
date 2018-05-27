import React from 'react';

export interface Props {
  className?: string;
  children?: any;
}

export default class ModalFooter extends React.Component<Props> {
  render() {
    return (
      <div
        className={`modal-footer kata-modal__footer ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}
