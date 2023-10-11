import React from "react";
import Navbar from "../Comp/navbar";
import Hero from "../Comp/DsTrack/hero";
import Service from "../Comp/DsTrack/service";
import Join from "../Comp/MlTrack/join";
import Footer from "../Comp/footer";


const DataScienceTrack = () => {
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

export default DataScienceTrack;