import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { DatePicker } from './DatePicker';
import { AdvancedOption, OptionAdvancedDatePicker } from './AdvancedOption';

const today = new Date();
// eslint-disable-next-line no-shadow
enum DatePickerKind {
  UPDATE = 'UPDATE',
  TODAY = 'TODAY',
  YESTERDAY = 'YESTERDAY',
  LAST_7_DAYS = 'LAST_7_DAYS',
  LAST_14_DAYS = 'LAST_14_DAYS',
  LAST_28_DAYS = 'LAST_28_DAYS',
  THIS_MONTH = 'THIS_MONTH',
  THIS_QUARTER = 'THIS_QUARTER',
}
const options: OptionAdvancedDatePicker[] = [
  { label: 'Today', value: DatePickerKind.TODAY },
  { label: 'Yesterday', value: DatePickerKind.YESTERDAY },
  { label: 'Last 7 days', value: DatePickerKind.LAST_7_DAYS },
  { label: 'Last 14 days', value: DatePickerKind.LAST_14_DAYS },
  { label: 'Last 28 days', value: DatePickerKind.LAST_28_DAYS },
  { label: 'This Month', value: DatePickerKind.THIS_MONTH },
  { label: 'This Quarter', value: DatePickerKind.THIS_QUARTER },
];
describe('components/DatePicker', () => {
  describe('DatePicker type single', () => {
    test('successfuly select today ', () => {
      const handleSelect = jest.fn(x => x);
      const { getByText } = render(
        <DatePicker
          type="picker"
          date={today}
          onChange={date => {
            handleSelect(date);
          }}
        />
      );
      const ThisDay = getByText(today.getDate().toString());
      act(() => {
        fireEvent.click(ThisDay);
      });
      expect(ThisDay).toHaveAttribute('aria-pressed', 'true');
      expect(handleSelect).toBeCalledTimes(1);
      expect(handleSelect).toReturnWith(new Date(today.setHours(0, 0, 0, 0)));
    });
  });
  describe('multiple DatePicker type range', () => {
    test('successfuly select today ', () => {
      const handleSelect = jest.fn(x => x);
      const { getAllByText, getByRole } = render(
        <DatePicker
          type="range"
          multiDatePicker
          date={today}
          onChange={date => {
            handleSelect(date);
          }}
        />
      );
      const ThisDay = getAllByText(today.getDate().toString());
      const Tommorow = getAllByText(new Date(today.setDate(+1)).getDate().toString());
      const UpdateButton = getByRole('button', { name: /update/i });
      act(() => {
        fireEvent.click(ThisDay[0]);
      });
      act(() => {
        fireEvent.click(Tommorow[0]);
      });
      act(() => {
        fireEvent.click(UpdateButton);
      });
      expect(ThisDay[0]).toHaveAttribute('aria-pressed', 'true');
      expect(Tommorow[0]).toHaveAttribute('aria-pressed', 'true');
      expect(handleSelect).toBeCalledTimes(1);
    });
  });
  describe('AdvancedDatePicker type range', () => {
    test('successfuly select today ', () => {
      const handleSelect = jest.fn(x => x);
      const handleOption = jest.fn(x => x);
      const { getAllByText, getByRole } = render(
        <DatePicker
          advanceView={<AdvancedOption options={options} optionHandler={handleOption} />}
          type="range"
          multiDatePicker
          date={today}
          onChange={date => {
            handleSelect(date);
          }}
        />
      );
      const ThisDay = getAllByText(today.getDate().toString());
      const Tommorow = getAllByText(new Date(today.setDate(+1)).getDate().toString());
      const UpdateButton = getByRole('button', { name: /update/i });
      act(() => {
        fireEvent.click(ThisDay[0]);
      });
      act(() => {
        fireEvent.click(Tommorow[0]);
      });
      act(() => {
        fireEvent.click(UpdateButton);
      });
      expect(ThisDay[0]).toHaveAttribute('aria-pressed', 'true');
      expect(Tommorow[0]).toHaveAttribute('aria-pressed', 'true');
      expect(handleSelect).toBeCalledTimes(1);
    });
    test('select option works correctly', () => {
      const handleSelect = jest.fn(x => x);
      const handleOption = jest.fn(x => x);
      const { getByText } = render(
        <DatePicker
          advanceView={<AdvancedOption options={options} optionHandler={handleOption} />}
          type="range"
          multiDatePicker
          date={today}
          onChange={date => {
            handleSelect(date);
          }}
        />
      );
      const optionLast7Days = getByText('Last 7 days');
      act(() => {
        fireEvent.click(optionLast7Days);
      });
      expect(handleOption).toBeCalledTimes(1);
    });
  });
});
