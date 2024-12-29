import './App.css';
import { Home } from './pages/Home';
import Champions from './pages/Champions';
import Awards from './pages/Awards';
import { PlayNow } from './pages/PlayNow';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<RootLayout />}>
         <Route  index element={<Home />}/>
         <Route  path='contests' element={<PlayNow />}/>
         <Route  path='awards' element={<Awards />}/>
         <Route  path='champions' element={<Champions />}/>
       </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;