import * as React from 'react';

import aksaraIconMaps from '../utils/aksaraIconMaps';
import { IconDetail } from '../utils/storybook';
import { IconGrid } from '..';

export default {
  title: 'Icons/Icon Library',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const BasicIcons = () => (
  <IconGrid>
    {aksaraIconMaps.basic.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Document = () => (
  <IconGrid>
    {aksaraIconMaps.doc.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Menu = () => (
  <IconGrid>
    {aksaraIconMaps.menu.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Bubbles = () => (
  <IconGrid>
    {aksaraIconMaps.bubble.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Atoms = () => (
  <IconGrid>
    {aksaraIconMaps.atoms.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Chart = () => (
  <IconGrid>
    {aksaraIconMaps.chart.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const AI = () => (
  <IconGrid>
    {aksaraIconMaps.ai.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const User = () => (
  <IconGrid>
    {aksaraIconMaps.user.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Media = () => (
  <IconGrid>
    {aksaraIconMaps.media.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Social = () => (
  <IconGrid>
    {aksaraIconMaps.social.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);

export const Panel = () => (
  <IconGrid>
    {aksaraIconMaps.panel.map(({ name, children }) => (
      <IconDetail key={name} name={name}>
        {children}
      </IconDetail>
    ))}
  </IconGrid>
);
