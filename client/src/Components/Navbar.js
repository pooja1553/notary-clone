import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand nav2" to="#">Notary</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse header" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link  nav1" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle nav1" to="/practice" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Practice Areas
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item nav1" to="/practice">Bankruptcy Law</Link></li>
            <li><Link className="dropdown-item nav1" to="/practice">Business Law</Link></li>
            <li><Link className="dropdown-item nav1" to="/practice">Civil Rights Law</Link></li>
            <li><Link className="dropdown-item nav1" to="/practice">Criminal Law</Link></li>
            <li><Link className="dropdown-item nav1" to="/practice">Immigration Law</Link></li>
            <li><Link className="dropdown-item nav1" to="/practice">Family Law</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav1" to="/testimonials">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav1" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav1" to="contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</header>
    </>
  )
}

export default Navbar