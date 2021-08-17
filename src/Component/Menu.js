import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu-style">
      <ul>
        <li><Link to="/">Home</Link>  </li>
        <li><Link to="Contact">Contact</Link> </li>
        <li><Link to="About">About</Link> </li>
      </ul>
    </div>
  );
};
