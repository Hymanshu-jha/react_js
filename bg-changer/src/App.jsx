import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (

    <>
<div className='w-screen h-screen flex items-end justify-center' style={{backgroundColor: color}} duration={10000}>

<div className='w-1/2 h-20 bg-slate-800 my-10 flex flex-col items-center justify-between px-1 py-1 flex-wrap'>

<button className='bg-red-400 text-white mx-1 my-3' onClick={()=> setColor("red")}>Red</button>
<button className='bg-blue-400 text-white mx-1 my-3' onClick={()=> setColor("blue")}>Blue</button>
<button className='bg-amber-500 text-white mx-1 my-3' onClick={()=> setColor("gold")}>Amber</button>

</div>

</div>
    </>

  );
}

export default App;
