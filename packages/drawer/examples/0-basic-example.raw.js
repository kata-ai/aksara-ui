class DrawerExample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  renderInner() {
    return (
      <Fragment>
        <DrawerHeader title="Drawer" />
        <DrawerBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <b>Quae quo sunt excelsiores, eo dant clariora indicia naturae.</b>{' '}
            <i>Facillimum id quidem est, inquam.</i> Num igitur eum postea
            censes anxio animo aut sollicito fuisse? Duo Reges: constructio
            interrete. Sed quid ages tandem, si utilitas ab amicitia, ut fit
            saepe, defecerit? Quamquam ab iis philosophiam et omnes ingenuas
            disciplinas habemus; Ne amores quidem sanctos a sapiente alienos
            esse arbitrantur. Quae cum ita sint, effectum est nihil esse malum,
            quod turpe non sit.{' '}
          </p>

          <p>
            Quippe: habes enim a rhetoribus;{' '}
            <i>Non dolere, inquam, istud quam vim habeat postea videro;</i> Quae
            in controversiam veniunt, de iis, si placet, disseramus. Quo modo
            autem optimum, si bonum praeterea nullum est?{' '}
            <a href="http://loripsum.net/" target="_blank">
              Simus igitur contenti his.
            </a>{' '}
            Beatus autem esse in maximarum rerum timore nemo potest.{' '}
          </p>

          <p>
            <a href="http://loripsum.net/" target="_blank">
              Hoc ipsum elegantius poni meliusque potuit.
            </a>{' '}
            Nec vero pietas adversus deos nec quanta iis gratia debeatur sine
            explicatione naturae intellegi potest.{' '}
            <i>Res enim se praeclare habebat, et quidem in utraque parte.</i>{' '}
            Gloriosa ostentatio in constituendo summo bono.{' '}
            <i>Aliter enim explicari, quod quaeritur, non potest.</i> Expectoque
            quid ad id, quod quaerebam, respondeas. Mihi quidem Antiochum, quem
            audis, satis belle videris attendere. Quod cum ille dixisset et
            satis disputatum videretur, in oppidum ad Pomponium perreximus
            omnes. Utrum igitur tibi litteram videor an totas paginas commovere?{' '}
          </p>
        </DrawerBody>
        <DrawerFooter>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close Drawer
          </Button>
        </DrawerFooter>
      </Fragment>
    );
  }

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button onClick={() => this.toggleDrawer()}>Open drawer</Button>

        <Drawer isOpen={open} onClose={() => this.toggleDrawer()}>
          {this.renderInner()}
        </Drawer>
      </Fragment>
    );
  }
}
