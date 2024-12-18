import React from 'react'
import "../styles/Header.css"
import logo from "../assets/logo-original.png"
export default function Header() {
  return (
    <div>
       <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-items">
          <a href="">Home</a>
          <a href="">Prices</a>
          <a href="">Models</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="button">
        <button type="button" class="btn btn-primary">Get started</button>
        </div>
       </nav>
    </div>
  )
}
