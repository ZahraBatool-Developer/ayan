import React from 'react'
import './Homepage.css'
import Navbar from '../../Component/navbar/Navbar'
import Hero from '../../Component/hero/Hero'
import About from '../../Component/about/About'
// import Services from '../../Component/services'
// import Project from '../../Component/project/Project'
// import Testimonial from '../../Component/testimonial/Testimonial'
import Contact from '../../Component/contact/Contact'
import Footer from '../../Component/footer/Footer'

const homepage = (props) => {
console.log(props)

  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Developer Site</title>

        <link rel="stylesheet" href="style.css" />


        <Navbar navoption={props.navoption}/>
        <Hero />
        <About />
        {/* <Services />
        <Project />
        <Testimonial /> */}
        <Contact />
        <Footer />

      </>

    </div>
  )
}

export default homepage
