import React, { useState } from 'react';
import ConversionItem from './ConversionItem';
import Error from './Error';

const Conversion = () => {
  const [error, setError] = useState('');

  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  const [currencyQuantity1, setCurrencyQuantity1] = useState(0);
  const [currencyQuantity2, setCurrencyQuantity2] = useState(0);

  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <main className="conversion">
      <div className="container">
        <div className="conversion__inner">
          <ConversionItem
            inputValue={inputValue1}
            setInputValue={setInputValue1}
            setInputValue2={setInputValue2}
            currencyQuantity={currencyQuantity1}
            setCurrencyQuantity={setCurrencyQuantity1}
            convertFromCurrency={currency1}
            convertToCurrency={currency2}
            setCurrency={setCurrency1}
            setError={setError}
          />
          <ConversionItem
            inputValue={inputValue2}
            setInputValue={setInputValue2}
            setInputValue2={setInputValue1}
            currencyQuantity={currencyQuantity2}
            setCurrencyQuantity={setCurrencyQuantity2}
            convertFromCurrency={currency2}
            convertToCurrency={currency1}
            setCurrency={setCurrency2}
            setError={setError}
          />
        </div>
      </div>
    </main>
  );
};

export default Conversion;
