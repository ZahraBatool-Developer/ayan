import React from 'react'

const Navbar = (props) => {
  console.log("props at navbar", props)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-custom">
          <div className="container">
            <a className="navbar-brand" href="#">
              My-Dev-Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    {props.navoption.about}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    {props.navoption.service}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    {props.navoption.proj}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonials">
                  {props.navoption.test}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    {props.navoption.cont}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
