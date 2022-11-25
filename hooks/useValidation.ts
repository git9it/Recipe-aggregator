import { useState, useEffect } from 'react';

interface IValidations {
  isDirty?: boolean;
  isEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  isUrl?: boolean;
  isIngridients?: boolean;
}

const useValidation = (value: string, validations: IValidations) => {
  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [ingridientsError, setIngridientsError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          const minLengthValidationValue = validations[validation];
          if (minLengthValidationValue) {
            value.length < minLengthValidationValue
              ? setMinLengthError(true)
              : setMinLengthError(false);
          }

          break;
        case 'maxLength':
          const maxLengthValidationValue = validations[validation];
          if (maxLengthValidationValue) {
            value.length < maxLengthValidationValue
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
          }
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

  useEffect(() => {
    if (
      isEmpty ||
      maxLengthError ||
      minLengthError ||
      urlError ||
      ingridientsError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, urlError, ingridientsError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    urlError,
    ingridientsError,
    inputValid,
  };
};

export default useValidation;
