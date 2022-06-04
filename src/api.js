const API_URL = 'https://api.exchangerate.host/latest';

export const getCurrencies = async () => {
  const response = await fetch(`${API_URL}?base=UAH&places=3&symbols=USD,EUR`);

  return await response.json();
};

export const getConvertedCurrency = async (to, from, amount) => {
  const response = await fetch(
    `${API_URL}?base=${from}&places=2&symbols=${to}&amount=${amount}`
  );

  return await response.json();
};
