import React from 'react';
import ReactDOM from 'react-dom';

import ModalWrapper from './ModalWrapper';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { Button } from '../Button';

interface Props {
  title?: string;
  message?: any;
  okLabel?: string;
  cancelLabel?: string;
}

class ConfirmDialog extends React.Component<Props> {
  static defaultProps = {
    title: 'Confirm',
    message: 'Are you sure',
    okLabel: 'OK',
    cancelLabel: 'Cancel'
  };

  promise: Promise<boolean>;
  accept: () => void;
  deny: () => void;

  constructor(props: Props) {
    super(props);
    this.promise = new Promise((resolve, reject) => {
      this.accept = () => {
        resolve(true);
      };
      this.deny = () => resolve(false);
    });
  }

  render() {
    return (
      <ModalWrapper show visible onClose={this.deny}>
        <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody className="font-weight-light">
          {this.props.message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.accept}>
            {this.props.okLabel}
          </Button>
          <Button onClick={this.deny}>{this.props.cancelLabel}</Button>
        </ModalFooter>
      </ModalWrapper>
    );
  }
}

const confirm = (options?: Partial<Props>) => {
  const element = document.createElement('div');

  function closeConfirm() {
    element.classList.add('kata-confirm-wrapper--out');
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(element);
      document.body.removeChild(element);
    }, 450);
  }

  element.classList.add('kata-confirm-wrapper');
  document.body.appendChild(element);
  const component = ReactDOM.render(<ConfirmDialog {...options} />, element);
  return (component as any).promise.then(res => {
    closeConfirm();
    return res;
  });
};

export default confirm;
