import React from "react";
import Navbar from "../Comp/navbar";
import Hero from "../Comp/MlTrack/hero";
import Service from "../Comp/MlTrack/service";
import Join from "../Comp/MlTrack/join";
import Footer from "../Comp/footer";


const MachineLearningTrack = () => {
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

export default MachineLearningTrack