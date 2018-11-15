/**
 * Creates a React Select-compatible option object
 * @param label Input label.
 */
const createOption = (label: string) => ({
  label,
  value: label
});

export default createOption;
