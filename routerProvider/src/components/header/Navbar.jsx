import React from 'react';
import { FaDice } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <FaDice size={32} color="white" />
          <h1>LudoCare</h1>
        </div>

        <ul className="routes">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li className="route_items">Home</li>
          </NavLink>
          <NavLink to="/contests" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li className="route_items">Contests</li>
          </NavLink>
          <NavLink to="/awards" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li className="route_items">Awards</li>
          </NavLink>
          <NavLink to="/champions" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li className="route_items">Champions</li>
          </NavLink>
        </ul>

        <button className="bg-slate-200 text-black" onClick={() => navigate('/awards', {replace:true})}>
          Start
        </button>

        <div className="login">
          <button className="log signup">Sign Up</button>
          <button className="log login">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;