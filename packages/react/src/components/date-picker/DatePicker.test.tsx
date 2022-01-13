import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { DatePicker } from './DatePicker';

const today = new Date();
const handleSelect = jest.fn(x => x);
const DatePickerTest = () => {
  const [selected, setSelected] = React.useState<Date>();

  return (
    <DatePicker
      type="picker"
      date={today}
      selected={selected}
      onChange={date => {
        setSelected(date);
        handleSelect(date);
      }}
    />
  );
};
describe('components/DatePicker', () => {
  describe('DatePicker', () => {
    test('renders correctly', () => {
      const { getByText } = render(<DatePickerTest />);
      const ThisDay = getByText(today.getDate().toString());
      act(() => {
        fireEvent.click(ThisDay);
      });
      expect(ThisDay).toHaveAttribute('aria-pressed', 'true');
      expect(handleSelect).toBeCalledTimes(1);
      expect(handleSelect).toReturnWith(new Date(today.setHours(0, 0, 0, 0)));
    });
  });
});
