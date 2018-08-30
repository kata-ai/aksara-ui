class ModalExample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    console.log('toggle is clicked');
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  renderInner() {
    return (
      <Fragment>
        <ModalHeader title="Modal Title" />
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close modal
          </Button>
        </ModalFooter>
      </Fragment>
    );
  }

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button onClick={() => this.toggleDrawer()}>Open modal</Button>

        <Modal show={open} onClose={() => this.toggleDrawer()}>
          {this.renderInner()}
        </Modal>
      </Fragment>
    );
  }
}
