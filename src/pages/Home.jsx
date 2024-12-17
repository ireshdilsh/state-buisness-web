import React from 'react'
import logo from "../assets/logo.png"
import heroImage from "../assets/hero.jpg"
import "../styles/Home.css"
export default function Home() {
  return (
    <div>
      <img src={heroImage} />
      <div className="black-window" />
      <nav>
        <img src={logo} />
        <a href="#">Home</a>
        <a href="#">Models</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Products</a>
      </nav>

      <div className="title">
        <p>Discover Your Perfect Place.</p>
      </div>
      <div className="discription">
        <p>Find your dream home with our curated listings and personalized recommendations.<br /> Start your search today and uncover a home that suits your lifestyle.</p>
      </div>
      <div className="button">
        <button type="button" class="btn btn-outline-light">Get Started
        </button>
      </div>
    </div>
  )
}
