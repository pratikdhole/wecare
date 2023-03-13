import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import './Header.css';

const Header = () => {

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
          <a class="navbar-brand" href="/"><img src={logo} alt='logo' /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/hospitals">HospitalList</Link>
              </li>
              <li class="nav-item">
                <Link to="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link to="/blogs">Blog</Link>
              </li>
              <li class="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header