import React from 'react'

const about = () => {
  return (
    <div>
 <section id="about" className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">
                <i className="bi bi-person-circle me-2" />
                About Me
              </h2>
              <p className="lead text-muted">Driven. Creative. Solution-Oriented.</p>
            </div>
            <div className="row align-items-center">
              {/* <div className="col-md-4 mb-4 mb-md-0">
                <img
                  src="./image/zahra.jpg"
                  alt="Developer"
                  className=" img-fluid rounded-3 shadow"
                  style={{ height: 350, width: "80%" }}
                />
              </div> */}
              {/* <div className="col-md-8"> */}
                <p className="fs-5">
                  I'm a passionate web developer with a strong foundation in front-end
                  technologies. I specialize in creating responsive, high-performance
                  websites with an emphasis on clean code, user experience, and
                  scalability.
                </p>
                <p className="text-muted">
                  Whether you're a startup looking to launch your MVP or a company
                  ready to elevate your digital presence, I can help craft smart,
                  elegant, and performant solutions tailored to your goals.
                </p>
             
            </div>
          </div>
        </section>
    </div>
  )
}

export default about
