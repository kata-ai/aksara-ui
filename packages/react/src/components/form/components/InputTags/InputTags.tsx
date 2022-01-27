import * as React from 'react';
import { Box, Wrap, WrapItem } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { Pill } from '../../../pill';

export interface InputTagsProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  errors?: boolean;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function inputTagsVariant({
  focused,
  disabled,
  errors,
}: Pick<InputTagsProps, 'disabled' | 'errors'> & { focused?: boolean }) {
  if (!disabled) {
    if (errors) {
      return 'error';
    }

    if (focused) {
      return 'focused';
    }

    return 'default';
  }

  return 'disabled';
}

const InputTags: React.FC<InputTagsProps> = ({ value, placeholder, disabled, errors, onChange, onInputChange }) => {
  const [tags, setTags] = React.useState(value || []);
  const [focused, setFocused] = React.useState(false);

  const tagInputRef = React.useRef<HTMLInputElement>(null);
  const inputTagsStyles = useComponentStyles('inputTags', { variant: inputTagsVariant({ focused, errors, disabled }) });

  const handleFocusInput = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent accidentally focusing on the input text when tag pills are clicked
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

    setTags(newTags);
    handleChange(newTags);
  };

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value || '';

    if (e.key === 'Enter' && val) {
      e.preventDefault(); // prevent accidently submiting form
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
    <Box
      sx={inputTagsStyles}
      display="flex"
      p="md"
      cursor={disabled ? 'not-allowed' : 'text'}
      onClick={handleFocusInput}
    >
      <Wrap spacing="xxs" display="inline-flex">
        {tags.map((tag, i) => (
          <WrapItem key={tag}>
            <Pill
              hasCloseIcon
              disabled={disabled}
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
              height: '24px',
              outline: 'none',
              width: '100%',
              '&::placeholder': {
                color: 'greymed01',
              },
            }}
            onKeyDown={inputKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
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
