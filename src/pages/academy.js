import React from 'react'
import Navbar from '../Comp/navbar'
import Hero from '../Comp/Academy/hero'
import Acquire from '../Comp/Academy/acquire'
import Selection from '../Comp/Academy/selection'
import Rank from '../Comp/Academy/rank'
import Foster from '../Comp/Academy/foster'
import Testimonial from '../Comp/Academy/testimonial'
import Join from '../Comp/Academy/join'
import Footer from '../Comp/footer'

const Academy = () => {
  return (
    <div>
      <div style={{position: 'sticky', top: 0, zIndex: 1}}>
      <Navbar />
      </div>
      <Hero />
      <Acquire />
      <Selection />
      <Rank />
      <Foster />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default Academy