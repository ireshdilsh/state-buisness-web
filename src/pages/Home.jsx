import React from 'react'
import logo from "../assets/logo.png"
import heroImage from "../assets/hero.jpg"
import "../styles/Home.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <div className="nav-bar">
        <Header />
      </div>

      {/* Body of Home page (like Landing page) */}
      <div className="home-body">
        <div className="hero-card">
          <div className="hero-card-title">
            <p>Easy way to find a <br />perfect property</p>
            <div className="hero-discription">
              <p>Simplify your search for the ideal property with our <br />intuitive platform. Browse through our extensive <br />listings and find your dream home effortlessly. <br />Start your journey today!</p>
            </div>
          </div>
          <div className="signin-button">
            <button type="submit" class="btn btn-primary">Sign In</button>
          </div>
          {/** adding image carouels */}

          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={heroImage} class="d-block w-100"/>
              </div>
              <div class="carousel-item">
                <img src={heroImage} class="d-block w-100"/>
              </div>
              <div class="carousel-item">
                <img src={heroImage} class="d-block w-100"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/** end of image carouels */}
        </div>
      </div>
      {/*End of Home page*/}

      <div className="footer-bar">
        <Footer />
      </div>
    </div>
  )
}
