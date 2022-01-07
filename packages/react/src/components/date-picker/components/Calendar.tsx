import React from 'react';
import { RenderProps, Calendar, DateObj } from 'dayzed';
import { IconArrowLeft, IconArrowRight } from '@aksara-ui/icons';
import { Box, Stack } from '../../../layout';
import { Button, IconButton } from '../../button';
import { Text } from '../../../typography';
import DateNumberButton, { DateNumberVariants } from './DateNumber';
import { monthNamesFull, weekdayNamesShort } from './calendar-utils';

export interface CalendarProp extends RenderProps {
  advanceView?: React.ReactNode;
  selected?: Date[];
  onUpdate?: () => void;
  onCancel?: () => void;
}

const getVariant = ({ today, selected, date }: DateObj, selectedDate?: Date[]) => {
  let variant: DateNumberVariants = 'default';
  if (today) {
    variant = 'currentDate';
  }
  if (selected) {
    variant = 'selected';
  }
  if (selectedDate && selectedDate.length === 2) {
    if (selectedDate[0].getTime() === date.getTime()) {
      variant = 'start';
    } else if (selectedDate[0] < date && date < selectedDate[1]) {
      variant = 'road';
    } else if (selectedDate[1].getTime() === date.getTime()) {
      variant = 'end';
    }
  }
  return variant;
};

const CalendarBox = ({
  calendars,
  getBackProps,
  getForwardProps,
  getDateProps,
  advanceView,
  onUpdate,
  onCancel,
  selected,
}: CalendarProp) => {
  const multiDatePicker = calendars.length > 1;
  // TODO
  // when multiDatePicker true, callback is called after hit Update Button
  // if singleDatePicker then callback is called after hit DateNumber

  // Create option autoClose after set value or not

  const renderHeader = () => {
    return (
      <Box display={['flex']} justifyContent="space-between" alignItems="center">
        <IconButton variant="plain" aria-label="Back" {...getBackProps({ calendars })}>
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>

        <IconButton variant="plain" aria-label="Next" {...getForwardProps({ calendars })}>
          <IconArrowRight aria-hidden fill="currentColor" />
        </IconButton>
      </Box>
    );
  };

  const renderDateNumber = (calendar: Calendar) => {
    return calendar.weeks.map((week, weekIndex) =>
      week.map((dateObj, index) => {
        const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
        if (!dateObj) {
          return (
            <div
              key={key}
              style={{
                display: 'inline-block',
                width: '32px',
                border: 'none',
                background: 'transparent',
              }}
            />
          );
        }
        const { date, selectable } = dateObj;
        // let background = today ? 'cornflowerblue' : '';
        // background = selected ? 'purple' : background;
        // background = !selectable ? 'teal' : background;

        return (
          <DateNumberButton key={key} {...getDateProps({ dateObj })} variant={getVariant(dateObj, selected)}>
            {selectable ? date.getDate() : 'X'}
          </DateNumberButton>
        );
      })
    );
  };
  const renderWeekLabel = (calendar: Calendar) => {
    return weekdayNamesShort.map(weekday => (
      <Box
        display={['inline-block']}
        width="32px"
        key={`${calendar.month}${calendar.year}${weekday}`}
        textAlign="center"
      >
        <Text fontSize="10px" lineHeight="16px" fontWeight="400" color="greymed04" width="32px">
          {weekday}
        </Text>
      </Box>
    ));
  };
  // TODO
  // render footer that has cancel and update button
  const renderFooter = () => {
    // TODO
    // call onUpdate()
    return (
      <Stack direction="horizontal" spacing="xs" flex={1}>
        <Button block size="lg" onClick={onCancel}>
          Cancel
        </Button>
        <Button block variant="primary" size="lg" onClick={onUpdate}>
          Update
        </Button>
      </Stack>
    );
  };

  if (calendars.length) {
    return (
      <Box borderRadius="lg" display={'inline-flex'}>
        {advanceView}
        {/* Header */}
        <Box padding="md">
          {renderHeader()}
          <Stack direction="horizontal" spacing={'xl'}>
            {calendars.map(calendar => (
              <Box
                maxWidth="224px"
                key={`${calendar.month}${calendar.year}`}
                position="relative"
                style={{
                  display: 'inline-block',
                }}
              >
                <Box
                  width="100%"
                  position="absolute"
                  textAlign="center"
                  left="0"
                  right="0"
                  top="-27px"
                  pointerEvents="none"
                >
                  <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="grey09">
                    {monthNamesFull[calendar.month]} {calendar.year}
                  </Text>
                </Box>
                {renderWeekLabel(calendar)}
                {renderDateNumber(calendar)}
              </Box>
            ))}
          </Stack>
          {multiDatePicker && renderFooter()}
        </Box>
      </Box>
    );
  }
  return null;
};
export default CalendarBox;
