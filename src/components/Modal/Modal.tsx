import React from 'react';
import ReactDOM from 'react-dom';

import ModalWrapper from './ModalWrapper';

interface Props {
  show: boolean;
  noBackdrop?: boolean;
  onClose(): void;
}

interface States {
  show: boolean;
  visible: boolean;
}

class Modal extends React.Component<Props, States> {
  el: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
      show: false,
      visible: false
    };
  }

  componentDidMount() {
    try {
      document.body.appendChild(this.el);
    } catch (error) {
      // do nothing
    }
  }

  componentWillUnmount() {
    try {
      document.body.removeChild(this.el);
    } catch (error) {
      // do nothing
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ show: nextProps.show });
    if (!nextProps.show) {
      setTimeout(() => {
        this.setState({ visible: false });
      }, 250);
    } else {
      this.setState({ visible: true });
    }
  }

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const { noBackdrop } = this.props;
    const { show, visible } = this.state;
    const wrapper = (
      <ModalWrapper {...{ noBackdrop, show, visible, onClose: this.onClose }}>
        {this.props.children}
      </ModalWrapper>
    );
    return ReactDOM.createPortal(wrapper, this.el);
  }
}

export default Modal;
