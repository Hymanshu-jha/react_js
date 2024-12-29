import React from 'react'
import { FaDice } from 'react-icons/fa'; ;
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <>



    <nav class="nav-bar">

       
        <div class="logo">
        <FaDice size={32} color="white" /> 
            <h1>LudoCare</h1>
        </div>

        
         <ul class="routes">
          <Link to='/'><li class="route_items">Home</li></Link>
          <Link to='/contests'><li class="route_items">Contests</li></Link>
          <Link to='/awards'><li class="route_items">Awards</li></Link>
          <Link to='/champions'><li class="route_items">Champions</li></Link>
         </ul>

         
          <div class="login">
            <button class="log signup">Sign Up</button>
            <button class="log login">Login</button>
          </div>
          

    </nav>
    



    </>


  )
}

export default Navbar