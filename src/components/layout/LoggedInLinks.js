import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    // The below links are desplayed when logged in only
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Logbook</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Dashboard</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto navbar-icons">
        <li className="nav-item">
          <NavLink className="nav-link" to="#" data-toggle="modal" data-target="#create-flight-log"><i className="fas fa-plane"></i></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/"><i className="fas fa-cog"></i></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/"><i className="fas fa-sign-out-alt"></i></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LoggedInLinks;