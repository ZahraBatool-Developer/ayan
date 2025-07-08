import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="footer-custom text-white pt-4 pb-3">
          <div className="container">
            <div className="row text-center text-md-start">
              {/* About / Brand */}
              <div className="col-md-6 mb-3 mb-md-0">
                <h5 className="fw-bold mb-2">MyDevPortfolio</h5>
                <p className="mb-1">
                  Crafting clean, modern, and performant web experiences.
                </p>
                <p className="mb-0">Based in Pakistan. Available worldwide 🌍</p>
              </div>
              {/* Social Links */}
              <div className="col-md-6 text-md-end">
                <h6 className="fw-semibold">Connect with me</h6>
                <a
                  href="https://github.com/yourusername"
                  className="footer-icon"
                  target="_blank"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="footer-icon"
                  target="_blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="mailto:your.email@example.com" className="footer-icon">
                  <i className="bi bi-envelope-fill" />
                </a>
              </div>
            </div>
            <hr className="my-3 border-light" />
            {/* Copyright */}
            <div className="text-center small">
              <i className="bi bi-code-slash" /> © 2025 Zahra Batool. All rights
              reserved.
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
