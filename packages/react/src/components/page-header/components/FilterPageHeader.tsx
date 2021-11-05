import { IconCloseRounded, IconFilter } from '@aksara-ui/icons';
import * as React from 'react';
import { Box, BoxProps, Stack } from '../../../layout';
import { Button, PlainButton } from '../../button';
import { InputSearchbox } from '../../form/components/InputSearchbox';
import { InputSelect } from '../../form/components/InputSelect';
import { Pill } from '../../pill';
import { Popover, PopoverTrigger, PopoverContent } from '../../popover';

export interface FilterPageHeaderProps extends BoxProps {
  /** callback function onClear action */
  onClearFilter?: () => void;
  /** callback function onSearch action  */
  onSearch?: React.ChangeEventHandler<HTMLInputElement>;
  // TODO filter panel is not implemented yet
  /** callback function onFilter action  */
  onClickFilter?: () => void;
  /** callback function onChangeOrder action  */
  onChangeOrder?: (orderOption: Record<string, { label: string; value: string }>) => void;
  /** order config, for now maximum order config is 2   */
  orderByOptions?: { key: string; label: string; options: { label: string; value: string }[] }[];
  /** filter data used to show filter tag   */
  filterData: { label: string; value: string }[];
  /** callback function when one of filter tag was removed   */
  onRemoveFilter: (data: { label: string; value: string }) => void;
}
export const MAX_TAG_FILTER = 6;
export const MAX_ORDER_OPTIONS = 2;

const FilterPageHeader: React.FC<FilterPageHeaderProps> = ({
  onSearch,
  onClickFilter, // TODO change filter need to be integrated with filter panel
  onChangeOrder,
  orderByOptions,
  filterData,
  onRemoveFilter,
  onClearFilter,
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
    if (filterData.length > MAX_TAG_FILTER) {
      return {
        show: filterData.slice(0, MAX_TAG_FILTER),
        more: filterData.slice(MAX_TAG_FILTER),
      };
    }
    return {
      show: filterData,
      more: [],
    };
  }, [filterData.length]);
  const renderOrderOptions = () => {
    if (!orderByOptions?.length) {
      return null;
    }
    return (
      <Box display="flex" flexDirection="row" marginTop={['md', 0]}>
        {orderByOptions.slice(0, MAX_ORDER_OPTIONS).map(orderItem => {
          return (
            <Box marginLeft={['xxs']} key={orderItem.key} data-testid="orderOption">
              <InputSelect
                selectedItem={orderOption[orderItem.key]}
                width="300px"
                placeholder={orderItem.label}
                itemToString={item => (item ? `${item.label}` : '')}
                itemRenderer={item => (
                  <>
                    <Box width={15} mr="sm" />
                    {`${item.label}`}
                  </>
                )}
                handleSelectedItemChange={({ selectedItem }) => {
                  if (selectedItem) {
                    setOrderOption({
                      ...orderOption,
                      [orderItem.key]: selectedItem,
                    });
                  }
                }}
                items={orderItem.options}
              />
            </Box>
          );
        })}
      </Box>
    );
  };
  const renderTagFilter = () => {
    const listFilterTag = listShownFilter.show.map(item => {
      return (
        <Pill
          data-testid="filter-tag"
          key={item.value}
          hasCloseIcon
          onClick={() => onRemoveFilter({ label: item.label, value: item.value })}
          variant="active"
        >
          {item.label}
        </Pill>
      );
    });
    return (
      <Stack direction="horizontal" alignItems="center" justifyContent="flex-end" marginTop={['md']} spacing="xxs">
        {listShownFilter.more.length && (
          <Popover>
            <PopoverTrigger>
              <PlainButton display="block" color="blue07">
                {listShownFilter.more.length}+ Filter
              </PlainButton>
            </PopoverTrigger>
            <PopoverContent placement="bottom">
              <Stack direction="horizontal" p="xs" spacing="xxs" flexWrap="wrap">
                {listShownFilter.more.map(item => {
                  return (
                    <Pill
                      my="xxs"
                      key={`${item.value}`}
                      data-testid="filter-tag-more"
                      hasCloseIcon
                      onClick={() => onRemoveFilter({ label: item.label, value: item.value })}
                      variant="active"
                    >
                      {item.label}
                    </Pill>
                  );
                })}
              </Stack>
            </PopoverContent>
          </Popover>
        )}
        {listFilterTag}
      </Stack>
    );
  };
  return (
    <>
      <Box
        display={['block', 'flex']}
        marginTop={['md', 'xl']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between']}
      >
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
        <Stack direction="horizontal" marginTop={['md', 0]} spacing="xxs">
          <Button
            variant="destructive"
            type="button"
            icon={IconCloseRounded}
            iconPosition="left"
            onClick={onClearFilter}
          >
            Clear all
          </Button>
          <Button
            data-testid="filter"
            variant="secondary"
            type="button"
            icon={IconFilter}
            iconPosition="left"
            onClick={onClickFilter}
          >
            Filter
          </Button>
        </Stack>
      </Box>
      {renderTagFilter()}
    </>
  );
};

export default FilterPageHeader;
