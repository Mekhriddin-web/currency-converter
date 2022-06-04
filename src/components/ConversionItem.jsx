import debounce from 'lodash.debounce';
import React, { useCallback, useEffect } from 'react';
import { getConvertedCurrency } from '../api';

const ConversionItem = ({
  inputValue,
  setInputValue,
  setInputValue2,
  currencyQuantity,
  setCurrencyQuantity,
  convertFromCurrency,
  convertToCurrency,
  setCurrency,
  setError,
}) => {
  const updateInputValue = useCallback(
    debounce(str => {
      setCurrencyQuantity(str);
    }, 500),
    []
  );

  const onChangeInput = e => {
    setInputValue(e.target.value);
    updateInputValue(e.target.value);
  };

  useEffect(() => {
    getConvertedCurrency(convertToCurrency, convertFromCurrency, inputValue)
      .then(data => {
        if (data.success) {
          const rate = Object.values(data.rates)[0];
          setInputValue2(rate || '');
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, [currencyQuantity, convertFromCurrency]);

  return (
    <div className="conversion__item">
      <input
        className="conversion__input"
        type="number"
        name=""
        value={inputValue}
        onChange={onChangeInput}
      />
      <select
        className="conversion__select"
        name="currencies"
        value={convertFromCurrency}
        onChange={e => setCurrency(e.target.value)}
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default ConversionItem;
