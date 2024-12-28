import { useState, useEffect, useCallback, useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(function generateFunction() {
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberArray = "0123456789";
    let characterArray = "[]{}@#%$&*|\?/><_-+=!";

    let selectArray = "";
    selectArray += alphabets;

    if (number) { selectArray = selectArray + numberArray }
    if (character) { selectArray = selectArray + characterArray }

    let pass = "";

    for (let i = 0; i < length; i++) {
      let currentIndex = Math.floor(Math.random() * selectArray.length);
      pass += selectArray[currentIndex];
    }

    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character, generatePassword]);

  const copyToClipboard = useCallback(()=>{

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
   window.navigator.clipboard.writeText(password);

  }, [password])



  return (
    <div className="w-full h-screen bg-gray-500 text-slate-100 fixed inset-0 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Password Generator
      </h1>

      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
        {/* Password Display and Copy Section */}
        <div className="w-full flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="password"
            className="flex-1 px-3 py-2 text-lg md:text-xl lg:text-2xl text-teal-900 rounded-md"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button 
          className="w-full sm:w-24 bg-blue-900 text-white text-lg md:text-xl py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        {/* Controls Section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Range Slider */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <input
              type="range"
              className="w-full cursor-pointer"
              min={8}
              max={30}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <span className="text-lg md:text-xl text-orange-500 text-center">
              Length: {length}
            </span>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center flex-1">
            <label className="flex items-center gap-2 text-lg md:text-xl">
              <span>Characters</span>
              <input
                type="checkbox"
                className="w-6 h-6"
                onChange={(e) => { setCharacter((character) => !character) }}
              />
            </label>

            <label className="flex items-center gap-2 text-lg md:text-xl">
              <span>Numbers</span>
              <input
                type="checkbox"
                className="w-6 h-6"
                onChange={(e) => { setNumber((number) => !number) }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;