import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCurrencies } from '../api';
import Error from './Error';

const Header = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getCurrencies('USD')
      .then(data => {
        if (data.success) {
          setCurrencies(Object.entries(data.rates));
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {currencies.length > 0 ? (
            <ul className="header__list">
              {currencies.map(currency => (
                <li className="header__item" key={currency[0]}>
                  {currency[0]} : {currency[1]}
                </li>
              ))}
            </ul>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
