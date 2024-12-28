import { useState, useEffect } from 'react';

const useCurrencyApi = (currency_code) => {
  const [data, setData] = useState({});

  const api = `https://v6.exchangerate-api.com/v6/4e12ac4a9e3bd9cd53e0e43e/latest/${currency_code}`;
  
  useEffect(() => {
    fetch(api)
      .then((response) => response.json()) // This was missing parentheses
      .then((data) => setData(data.conversion_rates))
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
        setData({}); // Set empty object in case of error
      });
  }, [currency_code]);

  return data;
};

export default useCurrencyApi;