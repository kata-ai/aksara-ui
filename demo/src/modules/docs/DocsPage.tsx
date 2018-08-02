import React from 'react';
import DocsDashboard from './DocsDashboard';
import DocsDashboardHeading from './DocsDashboardHeading';
import DocsDashboardContent from './DocsDashboardContent';

const DocsPage = () => (
  <DocsDashboard>
    <DocsDashboardHeading>DocsPage</DocsDashboardHeading>
    <DocsDashboardContent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        explicabo in ducimus nulla quis fuga quasi libero! Consectetur cum atque
        itaque vel enim, eius, dignissimos culpa minus quisquam doloremque
        dolor.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum nulla
        illum laborum sed at ratione iusto nihil natus doloremque, earum odio,
        magnam voluptatem unde a ab, quis accusamus aperiam?
      </p>
      <p>
        Dolore eos nemo nulla totam animi iusto harum nesciunt sequi porro,
        pariatur quos, quisquam aliquam dolorem. Hic pariatur consequatur enim
        assumenda totam odit, fuga qui. Ab rerum voluptatibus molestiae in!
      </p>
    </DocsDashboardContent>
  </DocsDashboard>
);

export default DocsPage;
