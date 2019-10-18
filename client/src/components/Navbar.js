import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">Shak-r</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/mybar" exact="true">My Bar</Link></li>
          <li><Link to="/drinks" exact="true">All Recipes</Link></li>
          <li><Link to="/drinks/random" exact="true">Random Cocktails</Link></li>
          <li><button onClick={()=>{localStorage.clear(); window.location.href="/";}}>Logout</button></li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/drinks-likes" exact="true">Liked Cocktails</Link></li>
          <li><Link to="/drinks" exact="true">Add a Cocktail</Link></li>
        </ul>
      </div>
    </nav>
  )
}
