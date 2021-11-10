import * as React from 'react';
import { Box } from '../../../layout';
import { Button } from '../../button';
import { InputText } from '../../form';
import { Popover, PopoverTrigger, PopoverContent } from '../../popover';
import PaginationButton from './PaginationButton';

export interface PaginationJumpToProps {
  total?: number;
  onSelectPage?: (page: number) => void;
}

const PaginationJumpTo: React.FC<PaginationJumpToProps> = ({ children, total, onSelectPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState<number | undefined>(undefined);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(parseInt(event.target.value, 10));
  };

  const handleSelectPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (onSelectPage && formValue) {
      onSelectPage(formValue);
      setIsOpen(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <PaginationButton>{children}</PaginationButton>
      </PopoverTrigger>
      <PopoverContent placement="top" align="center">
        <Box width={190}>
          <Box p="lg">
            <InputText type="number" min={1} max={total} width="100%" value={formValue} onChange={handleValueChange} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            py="sm"
            px="lg"
            boxShadow="inset 0px 1px 0px #EFF2F5"
          >
            <Button variant="primary" size="md" onClick={handleSelectPage}>
              Go
            </Button>
          </Box>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default PaginationJumpTo;
