import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
 <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <Link to ="/" className="navbar-brand">Exercice Tracker</Link>
  <div className="collpase navbar-collpase">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
         <Link to="/" className="nav-link">Exercices</Link>
      </li>
      <li className="navbar-item">
         <Link to="/create" className="nav-link">create Exercices</Link>
      </li>
      <li className="navbar-item">
         <Link to="/user" className="nav-link">create user</Link>
      </li>
      </ul>
  </div>

 </nav>  
)
}

export default Navbar;