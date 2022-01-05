import React from 'react';
import { RenderProps, Calendar } from 'dayzed';
import { IconArrowLeft, IconArrowRight } from '@aksara-ui/icons';
import { Box, Stack } from '../../../layout';
import { IconButton } from '../../button';
import { Text } from '../../../typography';
import DateNumberButton, { DateNumberVariants } from './DateNumber';
import { monthNamesFull, weekdayNamesShort } from './calendar-utils';

export interface CalendarProp extends RenderProps {
  advanceView?: React.ReactNode;
}
const CalendarBox = ({ calendars, getBackProps, getForwardProps, getDateProps, advanceView }: CalendarProp) => {
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
        const { date, selected, selectable, today } = dateObj;
        // let background = today ? 'cornflowerblue' : '';
        // background = selected ? 'purple' : background;
        // background = !selectable ? 'teal' : background;
        let variant: DateNumberVariants = 'default';
        if (today) {
          variant = 'currentDate';
        } else if (selected) {
          variant = 'selected';
        }
        return (
          <DateNumberButton key={key} {...getDateProps({ dateObj })} variant={variant}>
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

  if (calendars.length) {
    return (
      <Box boxShadow="4" borderRadius="lg" display={'inline-flex'}>
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
        </Box>
      </Box>
    );
  }
  return null;
};
export default CalendarBox;
