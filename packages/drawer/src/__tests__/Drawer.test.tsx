import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

const handleClose = jest.fn();

describe('Drawer', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Drawer isOpen onClose={handleClose}>
        <DrawerHeader title="Drawer" />
        <DrawerBody>
          <p>Drawer Body</p>
        </DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </Drawer>
    );

    const wrapper = getByTestId('Drawer-wrapper');
    expect(wrapper).toHaveClass('is-open');
  });

  test('has visibility: hidden when isOpen === false', () => {
    const { getByTestId } = render(
      <Drawer isOpen={false} onClose={handleClose}>
        <DrawerHeader title="Drawer" />
        <DrawerBody>
          <p>Drawer Body</p>
        </DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </Drawer>
    );

    const wrapper = getByTestId('Drawer-wrapper');
    expect(wrapper).not.toHaveClass('is-open');
  });

  test('handles onClose', () => {
    const { getByTestId } = render(
      <Drawer isOpen onClose={handleClose}>
        <DrawerHeader title="Drawer" />
        <DrawerBody>
          <p>Drawer Body</p>
        </DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </Drawer>
    );

    const closeButton = getByTestId('DrawerHeader-closeButton');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
