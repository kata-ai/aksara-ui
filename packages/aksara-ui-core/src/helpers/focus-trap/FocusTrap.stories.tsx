import * as React from 'react';

import { Paragraph, Anchor } from '../../layout/typography';
import { SystemBlock } from '../../utils/storybook';
import FocusTrap from './FocusTrap';

const readme = require('./README.md');

export default {
  title: 'Core/Others/FocusTrap',
  component: FocusTrap,
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 1 },
  },
};

export const Example = () => {
  const [active, setActive] = React.useState(false);

  return (
    <SystemBlock title="FocusTrap" subtitle="Helper component to support trapping tab focus inside a component.">
      <Paragraph mb="md">
        Tubulo putas dicere? Erat enim Polemonis. Minime vero istorum quidem, inquit. Hic nihil fuit, quod quaereremus.{' '}
        <Anchor href="https://www.youtube.com/watch?v=mUGDxyG1kOI" target="_blank" rel="noopener noreferrer">
          Est, ut dicis, inquit;
        </Anchor>{' '}
        Iam contemni non poteris.{' '}
      </Paragraph>

      <FocusTrap active={active}>
        <Paragraph mb="md">
          Focus Lock: <strong>{active ? 'On' : 'Off'}</strong>
        </Paragraph>
        <button type="button" onClick={() => setActive(!active)} style={{ marginBottom: '16px' }}>
          Toggle focus trap
        </button>
        <Paragraph mb="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Illa tamen simplicia, vestra versuta.{' '}
          <Anchor href="https://www.youtube.com/watch?v=lOiR7b6jumI" target="_blank" rel="noopener noreferrer">
            Quamquam tu hanc copiosiorem etiam soles dicere.
          </Anchor>{' '}
          Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris,
          divitiae, valitudo;{' '}
        </Paragraph>
      </FocusTrap>
    </SystemBlock>
  );
};
