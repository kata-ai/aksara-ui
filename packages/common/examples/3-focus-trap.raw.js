class CommonExample3 extends React.Component {
  constructor() {
    this.state = {
      active: false
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    return (
      <FocusTrap active={this.state.active}>
        <Button onClick={this.toggleActive}>Toggle focus trap</Button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas?
          Illa tamen simplicia, vestra versuta.
          <a href="https://www.youtube.com/watch?v=qTUnDV3MgVQ" target="_blank">
            Quamquam tu hanc copiosiorem etiam soles dicere.
          </a>{' '}
          Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane
          ei videantur haec: vacuitas doloris, divitiae, valitudo;{' '}
        </p>
      </FocusTrap>
    );
  }
}
