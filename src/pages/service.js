import React from 'react'
import Navbar from "../Comp/navbar";
import FirstHero from "../Comp/Service/firstHero";
import SecondHero from "../Comp/Service/secondHero";
import ThirdHero from "../Comp/Service/thirdHero";
import ForthHero from "../Comp/Service/forthHero";
import FifthHero from "../Comp/Service/fifthHero";
import LastHero from "../Comp/Service/lastHero";
import Footer from "../Comp/footer";
import Join from "../Comp/Home/join";

const Service = () => {
    return (
        <div>
            <Navbar/>
            <FirstHero/>
            <SecondHero/>
            <ThirdHero/>
            <ForthHero/>
            <FifthHero/>
            <LastHero/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default Service