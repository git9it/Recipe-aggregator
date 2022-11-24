import { useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue: string, validations: object) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

export default useInput;
