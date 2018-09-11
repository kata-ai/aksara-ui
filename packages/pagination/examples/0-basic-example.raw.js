class PaginationExample0 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      totalPages: 5
    };
  }

  onSelectPage(select) {
    this.setState({ currentPage: select });
  }

  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Pagination
          current={currentPage}
          total={totalPages}
          onSelect={select => this.onSelectPage(select)}
        />
        <span style={{ marginLeft: '16px' }}>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
      </div>
    );
  }
}
