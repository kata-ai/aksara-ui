import * as React from 'react';
import { Box, Wrap, WrapItem } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { Pill } from '../../../pill';

export interface InputTagsProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputTags: React.FC<InputTagsProps> = ({ value, onChange, onInputChange }) => {
  const [tags, setTags] = React.useState(value || []);
  const [focused, setFocused] = React.useState(false);

  const tagInputRef = React.useRef<HTMLInputElement>(null);
  const inputTagsStyles = useComponentStyles('inputTags', { variant: focused ? 'focused' : 'default' });

  const handleFocusInput = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent accidentally focusing on the input text when tags/actual input are clicked
    if (e.target !== e.currentTarget) {
      return;
    }

    if (tagInputRef.current) {
      tagInputRef.current.focus();
    }
  };

  const handleChange = (newTags: string[]) => {
    if (onChange) {
      onChange(newTags);
    }
  };

  const removeTag = (i: number) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
    handleChange(newTags);
  };

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value || '';

    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      const newTags = [...tags, val];
      setTags(newTags);
      handleChange(newTags);

      if (tagInputRef.current) {
        tagInputRef.current.value = '';
      }
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <Box sx={inputTagsStyles} display="flex" p="md" cursor="text" onClick={handleFocusInput}>
      <Wrap spacing="xxs" display="inline-flex">
        {tags.map((tag, i) => (
          <WrapItem key={tag}>
            <Pill
              variant="active"
              hasCloseIcon
              onClick={() => {
                removeTag(i);
              }}
            >
              {tag}
            </Pill>
          </WrapItem>
        ))}
        <WrapItem display="flex" flexGrow={1} alignItems="center">
          <Box
            as="input"
            type="text"
            sx={{
              appearance: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'greydark02',
              cursor: 'inherit',
              display: 'inline-block',
              fontSize: '12px',
              lineHeight: '20px',
              outline: 'none',
              width: '100%',
            }}
            onKeyDown={inputKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            ref={tagInputRef}
            onChange={onInputChange}
          />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

InputTags.displayName = 'InputTags';

export default InputTags;
