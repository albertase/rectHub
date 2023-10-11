import React from "react";
import Navbar from "../Comp/navbar";
import Hero from "../Comp/AiTrack/hero";
import Service from "../Comp/AiTrack/service";
import Join from "../Comp/AiTrack/join";
import Footer from "../Comp/footer";


const AiTrack = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Service/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default AiTrack