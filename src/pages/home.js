import React from 'react';
import Navbar from '../Comp/navbar';
import Hero from '../Comp/Home/hero';
import Service from '../Comp/Home/service';
import Business from '../Comp/Home/business';
import FourI from '../Comp/Home/fouri';
import Join from '../Comp/Home/join';
import Footer from '../Comp/footer';
import Slider from "../Comp/Home/Carousel/slider";

const Home = ({onNavClick}) => {
  return (
    <div>
      <div style={{position: 'sticky', top: 0, zIndex: 1}}>
        <Navbar clickNav={onNavClick}/>
        </div>
        <Hero />
        <Service />
        <Business />
        <FourI />
        <Slider/>
        <Join />
        <Footer />
    </div>
  )
}

export default Home