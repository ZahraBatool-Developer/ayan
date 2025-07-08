import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="py-5 bg-white">
          <div className="container text-center">
            <h2 className="section-title">
              <i className="bi bi-envelope-paper-heart me-2" />
              Contact Me
            </h2>
            <p className="fs-5">
              Email me at{" "}
              <a href="idzahrabatool@gmail.com" className="text-primary fw-bold">
                idzahrabatool@gmail.com
              </a>
            </p>
          </div>
        </section>
    </div>
  )
}

export default Contact
