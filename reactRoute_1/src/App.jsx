import { useState } from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import { Home } from './pages/Home';
import Champions from './pages/Champions';
import Awards from './pages/Awards';
import { PlayNow } from './pages/PlayNow';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <Navbar />

    <Routes>
       <Route  path='/' element={<Home />}/>
       <Route  path='/contests' element={<PlayNow />}/>
       <Route  path='/awards' element={<Awards />}/>
       <Route  path='/champions' element={<Champions />}/>
    </Routes>
    
    </>
  );
}

export default App;