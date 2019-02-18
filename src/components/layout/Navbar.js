import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import CreateFlightLog from '../flights/CreateFlightLog';

const Navbar = () => {
  return (
    // Navbar
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to='/'>
          <img src={ Logo } />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <LoggedInLinks />
        <LoggedOutLinks />
        <CreateFlightLog />
      </div>
    </nav>
  )
}

export default Navbar;