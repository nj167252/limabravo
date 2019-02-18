import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    // The below links are desplayed when logged out only
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="#about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#contact">Contact</NavLink>
            </li>
          </ul>
        </div>
  )
}

export default LoggedOutLinks;