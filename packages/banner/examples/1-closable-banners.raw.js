class BannerExample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'warning',
      message: 'Hey, no peeking! Close this banner by clicking that X button.',
      open: false
    };
  }

  toggleBanner() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { state, message, open } = this.state;

    return (
      <Fragment>
        <div>
          {open ? (
            <Banner
              state={state}
              message={message}
              onClose={() => this.toggleBanner()}
            />
          ) : (
            <button onClick={() => this.toggleBanner()}>Open banner</button>
          )}
        </div>
      </Fragment>
    );
  }
}
