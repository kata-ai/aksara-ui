import React from 'react';
import DocsDashboard from './DocsDashboard';
import DocsDashboardHeading from './DocsDashboardHeading';
import DocsDashboardContent from './DocsDashboardContent';

const DocsHome = () => (
  <DocsDashboard>
    <DocsDashboardHeading>DocsHome</DocsDashboardHeading>
    <DocsDashboardContent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        explicabo in ducimus nulla quis fuga quasi libero! Consectetur cum atque
        itaque vel enim, eius, dignissimos culpa minus quisquam doloremque
        dolor.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
        repudiandae nam repellendus minus, optio deserunt saepe reprehenderit ea
        architecto accusamus dolorem odio hic quisquam rem voluptatum cum,
        dignissimos delectus minima?
      </p>
    </DocsDashboardContent>
  </DocsDashboard>
);

export default DocsHome;
