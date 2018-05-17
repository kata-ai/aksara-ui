import React from 'react';

interface Props {
  className?: string;
  children?: any;
}

export default class ModalBody extends React.Component<Props> {
  render() {
    return (
      <div className={`modal-body kata-modal__body ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
