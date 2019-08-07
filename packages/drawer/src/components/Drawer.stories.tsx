import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';
import WithState from '../../../../.storybook/components/WithState';

import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';
import DrawerFooter from './DrawerFooter';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Drawer', module).addDecorator(StoryWrapper);

const infoText = `
## Install

~~~sh
# yarn
yarn add @kata-kit/drawer
# npm
npm install @kata-kit/drawer
~~~

## Usage

~~~jsx
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from '@kata-kit/drawer';

<>
  <Drawer isOpen={this.stateisOpen} onClose={() => this.setState({ isOpen: false })}>
    <DrawerHeader title="Drawer" />
    <DrawerBody>
      <p>Drawer Body</p>
    </DrawerBody>
    <DrawerFooter>
      <Button
        color="primary"
        onClick={() => this.setState({ isOpen: false })}
      >
        Close Drawer
      </Button>
    </DrawerFooter>
  </Drawer>
  <Button color="primary" onClick={() => this.setState({ isOpen: true })}>
    Open drawer
  </Button>
</>
~~~
`;

story.add(
  'Documentation',
  () => (
    <WithState initialState={{ isOpen: false }}>
      {({ isOpen }, { setState }) => (
        <div>
          <Drawer isOpen={isOpen} onClose={() => setState({ isOpen: false })}>
            <DrawerHeader title="Drawer" />
            <DrawerBody>
              <p>Drawer Body</p>
            </DrawerBody>
          </Drawer>
          <button type="button" onClick={() => setState({ isOpen: true })}>
            Open drawer
          </button>
        </div>
      )}
    </WithState>
  ),
  { info: { text: infoText } }
);

story.add(
  'Basic Example',
  () => (
    <WithState initialState={{ isOpen: false }}>
      {({ isOpen }, { setState }) => (
        <div>
          <Drawer isOpen={isOpen} onClose={() => setState({ isOpen: false })}>
            <DrawerHeader title="Drawer" />
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <b>
                  Quae quo sunt excelsiores, eo dant clariora indicia naturae.
                </b>{' '}
                <i>Facillimum id quidem est, inquam.</i> Num igitur eum postea
                censes anxio animo aut sollicito fuisse? Duo Reges: constructio
                interrete. Sed quid ages tandem, si utilitas ab amicitia, ut fit
                saepe, defecerit? Quamquam ab iis philosophiam et omnes ingenuas
                disciplinas habemus; Ne amores quidem sanctos a sapiente alienos
                esse arbitrantur. Quae cum ita sint, effectum est nihil esse
                malum, quod turpe non sit.{' '}
              </p>

              <p>
                Quippe: habes enim a rhetoribus;{' '}
                <i>Non dolere, inquam, istud quam vim habeat postea videro;</i>{' '}
                Quae in controversiam veniunt, de iis, si placet, disseramus.
                Quo modo autem optimum, si bonum praeterea nullum est?{' '}
                <a href="http://loripsum.net/" target="_blank">
                  Simus igitur contenti his.
                </a>{' '}
                Beatus autem esse in maximarum rerum timore nemo potest.{' '}
              </p>

              <p>
                <a href="http://loripsum.net/" target="_blank">
                  Hoc ipsum elegantius poni meliusque potuit.
                </a>{' '}
                Nec vero pietas adversus deos nec quanta iis gratia debeatur
                sine explicatione naturae intellegi potest.{' '}
                <i>
                  Res enim se praeclare habebat, et quidem in utraque parte.
                </i>{' '}
                Gloriosa ostentatio in constituendo summo bono.{' '}
                <i>Aliter enim explicari, quod quaeritur, non potest.</i>{' '}
                Expectoque quid ad id, quod quaerebam, respondeas. Mihi quidem
                Antiochum, quem audis, satis belle videris attendere. Quod cum
                ille dixisset et satis disputatum videretur, in oppidum ad
                Pomponium perreximus omnes. Utrum igitur tibi litteram videor an
                totas paginas commovere?{' '}
              </p>
            </DrawerBody>
            <DrawerFooter>This is drawer footer.</DrawerFooter>
          </Drawer>
          <button type="button" onClick={() => setState({ isOpen: true })}>
            Open drawer
          </button>
        </div>
      )}
    </WithState>
  ),
  { info: { disable: true } }
);

story.add(
  'With Backdrop Dismissal',
  () => (
    <WithState initialState={{ isOpen: false }}>
      {({ isOpen }, { setState }) => (
        <div>
          <Drawer
            isOpen={isOpen}
            backdrop
            onClose={() => setState({ isOpen: false })}
          >
            <DrawerHeader title="Drawer" />
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <b>
                  Quae quo sunt excelsiores, eo dant clariora indicia naturae.
                </b>{' '}
                <i>Facillimum id quidem est, inquam.</i> Num igitur eum postea
                censes anxio animo aut sollicito fuisse? Duo Reges: constructio
                interrete. Sed quid ages tandem, si utilitas ab amicitia, ut fit
                saepe, defecerit? Quamquam ab iis philosophiam et omnes ingenuas
                disciplinas habemus; Ne amores quidem sanctos a sapiente alienos
                esse arbitrantur. Quae cum ita sint, effectum est nihil esse
                malum, quod turpe non sit.{' '}
              </p>

              <p>
                Quippe: habes enim a rhetoribus;{' '}
                <i>Non dolere, inquam, istud quam vim habeat postea videro;</i>{' '}
                Quae in controversiam veniunt, de iis, si placet, disseramus.
                Quo modo autem optimum, si bonum praeterea nullum est?{' '}
                <a href="http://loripsum.net/" target="_blank">
                  Simus igitur contenti his.
                </a>{' '}
                Beatus autem esse in maximarum rerum timore nemo potest.{' '}
              </p>

              <p>
                <a href="http://loripsum.net/" target="_blank">
                  Hoc ipsum elegantius poni meliusque potuit.
                </a>{' '}
                Nec vero pietas adversus deos nec quanta iis gratia debeatur
                sine explicatione naturae intellegi potest.{' '}
                <i>
                  Res enim se praeclare habebat, et quidem in utraque parte.
                </i>{' '}
                Gloriosa ostentatio in constituendo summo bono.{' '}
                <i>Aliter enim explicari, quod quaeritur, non potest.</i>{' '}
                Expectoque quid ad id, quod quaerebam, respondeas. Mihi quidem
                Antiochum, quem audis, satis belle videris attendere. Quod cum
                ille dixisset et satis disputatum videretur, in oppidum ad
                Pomponium perreximus omnes. Utrum igitur tibi litteram videor an
                totas paginas commovere?{' '}
              </p>
            </DrawerBody>
          </Drawer>
          <button type="button" onClick={() => setState({ isOpen: true })}>
            Open drawer
          </button>
        </div>
      )}
    </WithState>
  ),
  { info: { disable: true } }
);
