import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [ingridientsError, setIngridientsError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case 'maxLength':
          value.length > validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isUrl':
          const reUrl =
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
          reUrl.test(String(value).toLowerCase())
            ? setUrlError(false)
            : setUrlError(true);
          break;
        case 'isIngridients':
          const reIngridients = /\d,[a-zA-Z]+,([a-zA-Z]+( [a-zA-Z]+)+)/i;
          reIngridients.test(String(value).toLowerCase())
            ? setIngridientsError(false)
            : setIngridientsError(true);
          break;
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLength,
    maxLengthError,
    urlError,
    ingridientsError,
  };
};

export default useValidation;
