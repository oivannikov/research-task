import React from 'react';

import { NavLink } from 'react-router-dom';

import '../../index.css';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">React + Typescript</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to={`${process.env.PUBLIC_URL}/`}>Список дел</NavLink></li>
          <li><NavLink to={`${process.env.PUBLIC_URL}/about`}>Информация</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}