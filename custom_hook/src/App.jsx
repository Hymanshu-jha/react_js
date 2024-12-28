import { useState } from 'react';
import './App.css';
import useCurrencyApi from './components/useCurrencyApi.js';
import { Capsule } from './components/Capsule.jsx';


function App() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [ipamount, setIpamount] = useState('');
  const [opamount, setOpamount] = useState('');

  const data = useCurrencyApi(from);
  const options = Object.keys(data);

  const handleFromAmountChange = (amount) => {
    setIpamount(amount);
    // Add conversion logic here if needed
  };

  const handleToAmountChange = (amount) => {
    setOpamount(Number(ipamount*Number(data[to])));
    console.log(Number(ipamount*Number(data[to])))
    // Add conversion logic here if needed
  };

  const handleFromCurrencyChange = (currency) => {
    setFrom(currency);
  };

  const handleToCurrencyChange = (currency) => {
    setTo(currency);
  };



  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setIpamount(opamount);
    setOpamount(ipamount);
  };

  return (
    <div className='bg-gray-800 w-screen h-full flex inset-0 fixed items-center justify-center'>


      <div className='bg-gray-500 h-full w-3/6'>
        <Capsule
          label="from"
          currencyOptions={options}
          amount={ipamount}
          onAmountChange={handleFromAmountChange}
          onCurrencyChange={handleFromCurrencyChange}
          selectCurrency={from}
        />

        <button 
          className='text-white bg-blue-500 h-10 w-60'
          onClick={handleSwap}
        >
          Swap
        </button>

        <Capsule
          label="to"
          currencyOptions={options}
          amount={opamount}
          onAmountChange={handleToAmountChange}
          onCurrencyChange={handleToCurrencyChange}
          selectCurrency={to}
        />

        <button className='text-white bg-blue-600 w-full py-4 flex items-center justify-center' onClick={handleToAmountChange}>
          Convert {from} to {to}
        </button>
      </div>
    </div>
  );
}

export default App;