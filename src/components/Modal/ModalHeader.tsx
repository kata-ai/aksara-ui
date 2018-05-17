import React from 'react';

import { Button } from 'components/Button';

interface Props {
  className?: string;
  noClose?: boolean;
  children: any;
  // private props
  onClose?(): void;
}

export default class ModalHeader extends React.Component<Props> {
  render() {
    return (
      <div
        className={`modal-header kata-modal__header ${this.props.className}`}
      >
        <h2 className="kata-modal__title heading2">{this.props.children}</h2>
        {!this.props.noClose && (
          <Button
            type="button"
            className="kata-modal__close"
            data-dismiss="modal"
            aria-label="Close"
            isIcon
            onClick={this.props.onClose}
          >
            <i className="icon-close" />
          </Button>
        )}
      </div>
    );
  }
}
