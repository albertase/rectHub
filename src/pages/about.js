import React from 'react'
import Navbar from '../Comp/navbar'
import Hero from '../Comp/About/hero'
import Who from '../Comp/About/who'
import Join from '../Comp/About/join'
import Footer from '../Comp/footer'

const About = () => {
  return (
    <div>
      <div style={{position: 'sticky', top: 0, zIndex: 1}}>
        <Navbar />
        </div>
        <Hero />
        <Who />
        <Join />
        <Footer />
    </div>
  )
}

export default About