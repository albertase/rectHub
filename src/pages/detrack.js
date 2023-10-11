import React from "react";
import Navbar from "../Comp/navbar";
import Footer from "../Comp/footer";
import Hero from "../Comp/DeTrack/hero";
import Service from "../Comp/DeTrack/service";
import Join from "../Comp/MlTrack/join";


const DataEngineeringTrack = () => {
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


export default DataEngineeringTrack