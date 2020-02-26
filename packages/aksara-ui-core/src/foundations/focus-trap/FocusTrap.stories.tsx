import * as React from 'react';

import { SystemWrapper, SystemBlock } from '../../utils/storybook';
import FocusTrap from './FocusTrap';

const readme = require('./README.md');

export default {
  title: 'Core|Foundations/FocusTrap',
  component: FocusTrap,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 1 },
  },
};

export const Example = () => {
  const [active, setActive] = React.useState(false);

  return (
    <SystemBlock title="FocusTrap" subtitle="Helper component to support trapping tab focus inside a component.">
      <p>
        Tubulo putas dicere? Erat enim Polemonis. Minime vero istorum quidem, inquit. Hic nihil fuit, quod quaereremus.{' '}
        <a href="https://www.youtube.com/watch?v=mUGDxyG1kOI" target="_blank" rel="noopener noreferrer">
          Est, ut dicis, inquit;
        </a>{' '}
        Iam contemni non poteris.{' '}
      </p>

      <FocusTrap active={active}>
        <p>
          Focus Lock: <strong>{active ? 'On' : 'Off'}</strong>
        </p>
        <button type="button" onClick={() => setActive(!active)} style={{ marginBottom: '16px' }}>
          Toggle focus trap
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra versuta.{' '}
          <a href="https://www.youtube.com/watch?v=lOiR7b6jumI" target="_blank" rel="noopener noreferrer">
            Quamquam tu hanc copiosiorem etiam soles dicere.
          </a>{' '}
          Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris,
          divitiae, valitudo;{' '}
        </p>
      </FocusTrap>
    </SystemBlock>
  );
};
