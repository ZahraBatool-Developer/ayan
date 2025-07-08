import React from 'react'
import logo from '../../home/page/image/zahra.jpg'
const Hero = () => {
  return (
    <div>
      <header className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center">
          <img
            src= {logo}
            alt="Profile"
            className="profile-img rounded-circle shadow mb-4"
          />
          <h1 className="display-4 fw-bold typing">I am a Developer...</h1>
          <p className="lead">
            Building modern, responsive, and user-focused web solutions.
          </p>
        </header>
    </div>
  )
}

export default Hero
