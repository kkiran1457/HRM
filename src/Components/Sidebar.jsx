import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <span>HRM</span><span className="sidebar__highlight"></span>
      </h2>
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="sidebar__item">
          <Link to="/finance">Finance</Link>
        </li>
        <li className="sidebar__item">
          <Link to="/hr">HR</Link>
        </li>
        <li className="sidebar__item">
          <Link to="/work">Work</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
