import React, { useState } from "react";
// import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaBars } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>

          <NavLink to="/home"> <FaHome size={16} style={{ marginBottom: '-2px' }} /> Home</NavLink>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropdown-toggle">About</a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <NavLink to="/PropertiesForSale">Properties for Sale</NavLink>
              <NavLink to="/Expressyourinterest">Express Your Interest</NavLink>
            </li>
          </ul>

        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      

      <div className="title">
        <div className="searchbox">
          <input className="form-control" placeholder="Search" aria-label="Search" type="text" />
          <button className="btn btn-sm" type="button">
            <i className="" ><FaSearch size={18} style={{ marginLeft: '-2' }} /></i>
          </button>
        </div>
      </div>

    </nav >
  );
};


