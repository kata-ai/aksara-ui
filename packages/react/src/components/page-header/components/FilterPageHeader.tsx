import * as React from 'react';
import { IconCloseRounded, IconFilter } from '@aksara-ui/icons';
import { Box, BoxProps } from '../../../layout';
import { Button } from '../../button';
import { InputSearchbox } from '../../form/components/InputSearchbox';
import { InputSelect } from '../../form/components/InputSelect';

export interface FilterPageHeaderProps extends BoxProps {
  onClearFilter?: () => void;
  onSearch?: () => void;
  onChangeFilter?: () => void;
  onChangeOrder?: () => void;
  orderByOptions?: { key: string; label: string; options: { label: string; value: string }[] }[];
  filterData: { label: string; value: string }[];
  onRemoveFilter?: (key: string, value: string) => void;
}
const MAX_TAG_FILTER = 6;

const FilterPageHeader: React.FC<FilterPageHeaderProps> = ({
  onSearch,
  onChangeFilter,
  onChangeOrder,
  orderByOptions,
  filterData,
  onRemoveFilter,
  onClearFilter,
}) => {
  // maximum shown filter is 6
  // more field is used for saving the rest of filter which not include on show field
  // useMemo, only change when filterData is changed
  const listShownFilter = React.useMemo(() => {
    if (filterData.length > MAX_TAG_FILTER) {
      return {
        show: filterData.slice(0, MAX_TAG_FILTER - 1),
        more: filterData.slice(MAX_TAG_FILTER - 1),
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
      <Box display="flex" flexDirection="row">
        {orderByOptions.map(orderItem => {
          return (
            <Box marginLeft={[0, 'xxs']}>
              <InputSelect
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
                    console.log(selectedItem);
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
    console.log(listShownFilter);
    return <div>tes</div>;
  };
  return (
    <Box
      display={['block', 'flex']}
      marginTop={['md', 'xl']}
      alignItems={[null, 'center']}
      justifyContent={[null, 'space-between']}
    >
      <Box display={['block', 'flex']} justifyContent={[null, 'space-between']}>
        <InputSearchbox id="textDummy" name="textDummy" placeholder="Search..." autoComplete="off" width="300px" />
        {renderOrderOptions()}
      </Box>
      <Box marginTop={['md', 0]}>
        <Button
          flex="1 1 0%"
          alignItems="items-end"
          variant="destructive"
          type="button"
          icon={IconCloseRounded}
          iconPosition="left"
          onClick={onClearFilter}
        >
          Clear all
        </Button>
        <Button
          marginLeft={[0, 'xxs']}
          flex="1 1 0%"
          alignItems="items-end"
          variant="secondary"
          type="button"
          icon={IconFilter}
          iconPosition="left"
          onClick={onClearFilter}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};

export default FilterPageHeader;
