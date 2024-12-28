import React from 'react';

export const Capsule = ({
  label,
  currencyOptions = [],
  amount = 1,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = 'USD',
}) => {
  const handleAmountChange = (e) => {
    onAmountChange && onAmountChange(Number(e.target.value));
  };

  const handleCurrencyChange = (e) => {
    onCurrencyChange && onCurrencyChange(e.target.value);
  };

  return (
    <div className="w-full h-2/5 bg-gray-400 font-bold text-black flex items-center justify-between">
      <div className="w-1/5 flex flex-col justify-center sm:m-10">
        <label htmlFor={label} className="mb-2">
          {label}:
        </label>
        <input
          id={`${label}-amount`}
          value={amount}
          type="number"
          min={0}
          placeholder=""
          onChange={handleAmountChange}
          className="p-2 rounded"
        />
      </div>

      <div className="w-1/5 flex flex-col justify-center sm:m-10">
        <select
          value={selectCurrency}
          name={label}
          id={label}
          onChange={handleCurrencyChange}
          className="p-2 rounded"
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};