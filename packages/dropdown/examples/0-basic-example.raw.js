class DropdownExample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: ['Apple', 'Banana', 'Cherry'],
      selected: undefined
    };
  }

  handleSelect(value) {
    this.setState({ selected: value });
  }

  render() {
    const { values, selected } = this.state;

    return (
      <div style={{ minHeight: '240px' }}>
        <DropdownSelector
          value={selected}
          onSelect={value => this.handleSelect(value)}
        >
          {values.map(v => (
            <DropdownItem key={v} value={v}>
              {v}
            </DropdownItem>
          ))}
        </DropdownSelector>
      </div>
    );
  }
}
