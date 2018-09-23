class ToggleButtonExample extends React.Component {
  constructor() {
    super();

    this.state = {
      activated: false
    };
  }

  render() {
    const { activated } = this.state;

    return (
      <Fragment>
        <div style={{ marginBottom: '8px' }}>
          <ToggleButton
            active={activated}
            onToggle={state => {
              this.setState({ activated: state });
            }}
            renderActive={() => <Button>Deactivate</Button>}
            renderInactive={() => <Button color="primary">Activate</Button>}
          />
        </div>
        <div>
          <span>
            <strong>Sentinel forces:</strong>{' '}
            {activated ? 'Activated' : 'Deactivated'}
          </span>
        </div>
      </Fragment>
    );
  }
}
