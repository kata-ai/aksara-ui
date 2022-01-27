import { IconCloseRounded } from '@aksara-ui/icons';
import * as React from 'react';
import { Box, BoxProps, Stack } from '../../layout';
import { Button, PlainButton } from '../button';
import { InputGroup } from '../form/components/InputGroup';
import { InputPrefix } from '../form/components/InputPrefix';
import { InputSearchbox } from '../form/components/InputSearchbox';
import { InputSelect } from '../form/components/InputSelect';
import { Pill } from '../pill';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export interface FilterPageHeaderProps extends BoxProps {
  /** callback function onClear action */
  onClearFilter?: () => void;
  /** callback function onSearch action  */
  onSearch?: React.ChangeEventHandler<HTMLInputElement>;
  // TODO filter panel is not implemented yet
  /** callback function onFilter action  */
  actions?: React.ReactNode;
  /** callback function onChangeOrder action  */
  onChangeOrder?: (orderOption: Record<string, { label: string; value: string }>) => void;
  /** order config, for now maximum order config is 2   */
  orderByOptions?: { key: string; label: string; options: { label: string; value: string }[] }[];
  /** filter data used to show filter tag   */
  filterData?: { label: string; value: string }[];
  /** callback function when one of filter tag was removed   */
  onRemoveFilter?: (data: { label: string; value: string }) => void;
}
export const MAX_TAG_FILTER = 6;
export const MAX_ORDER_OPTIONS = 2;

const FilterPageHeader: React.FC<FilterPageHeaderProps> = ({
  onSearch,
  onChangeOrder,
  orderByOptions,
  filterData,
  onRemoveFilter,
  onClearFilter,
  actions,
}) => {
  const [orderOption, setOrderOption] = React.useState<Record<string, { label: string; value: string }>>({});
  React.useEffect(() => {
    if (orderOption && onChangeOrder) {
      onChangeOrder(orderOption);
    }
  }, [orderOption]);
  // maximum shown filter is 6
  // more field is used for saving the rest of filter which not include on show field
  // useMemo, only change when filterData is changed
  const listShownFilter = React.useMemo(() => {
    if (filterData && filterData.length > MAX_TAG_FILTER) {
      return {
        show: filterData.slice(0, MAX_TAG_FILTER),
        more: filterData.slice(MAX_TAG_FILTER),
      };
    }
    return {
      show: filterData,
      more: [],
    };
  }, [filterData?.length]);
  const renderOrderOptions = () => {
    if (!orderByOptions?.length) {
      return null;
    }
    return (
      <Box display="flex" flexDirection="row" marginTop={['md', 0]}>
        {orderByOptions.slice(0, MAX_ORDER_OPTIONS).map(orderItem => {
          return (
            <Box marginLeft={['xxs']} key={orderItem.key} data-testid="orderOption">
              <InputGroup width="100%" maxWidth={360}>
                <InputPrefix zIndex={1}>Sort by</InputPrefix>
                <InputSelect
                  selectedItem={orderOption[orderItem.key]}
                  width="300px"
                  placeholder={orderItem.label}
                  itemToString={item => (item ? `${item.label}` : '')}
                  itemValue={item => (item ? `${item.value}` : '')}
                  handleSelectedItemChange={({ selectedItem }) => {
                    if (selectedItem) {
                      setOrderOption({
                        ...orderOption,
                        [orderItem.key]: selectedItem,
                      });
                    }
                  }}
                  items={orderItem.options}
                  inputStyle={{
                    pl: 58,
                  }}
                />
              </InputGroup>
            </Box>
          );
        })}
      </Box>
    );
  };
  const renderTagFilter = () => {
    if (!listShownFilter.show) {
      return null;
    }
    const listFilterTag = listShownFilter.show.map(item => {
      return (
        <Pill
          data-testid="filter-tag"
          key={item.value}
          hasCloseIcon
          onClick={() => onRemoveFilter && onRemoveFilter({ label: item.label, value: item.value })}
        >
          {item.label}
        </Pill>
      );
    });
    return (
      <Stack direction="horizontal" alignItems="center" justifyContent="flex-start" spacing="xxs">
        {listFilterTag}
        {listShownFilter.more.length && (
          <Popover>
            <PopoverTrigger>
              <PlainButton display="block" color="blue07">
                {listShownFilter.more.length}+ Filter
              </PlainButton>
            </PopoverTrigger>
            <PopoverContent placement="bottom">
              <Stack direction="horizontal" p="xs" spacing="xxs">
                {listShownFilter.more.map(item => {
                  return (
                    <Pill
                      key={`${item.value}`}
                      data-testid="filter-tag-more"
                      hasCloseIcon
                      onClick={() => onRemoveFilter && onRemoveFilter({ label: item.label, value: item.value })}
                    >
                      {item.label}
                    </Pill>
                  );
                })}
              </Stack>
            </PopoverContent>
          </Popover>
        )}
      </Stack>
    );
  };
  return (
    <>
      <Box display={['block', 'flex']} alignItems={[null, 'center']} justifyContent={[null, 'space-between']}>
        <Box display={['block', 'flex']} justifyContent={[null, 'space-between']}>
          <InputSearchbox
            id="textDummy"
            name="textDummy"
            placeholder="Search..."
            autoComplete="off"
            width="300px"
            onChange={onSearch}
          />
          {renderOrderOptions()}
        </Box>
        {actions && <Box marginTop={['md', 0]}>{actions}</Box>}
      </Box>
      {filterData && (
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={['md']}>
          {renderTagFilter()}
          <Button
            variant="destructive"
            type="button"
            icon={IconCloseRounded}
            iconPosition="left"
            onClick={onClearFilter}
          >
            Clear all
          </Button>
        </Box>
      )}
    </>
  );
};

export default FilterPageHeader;
