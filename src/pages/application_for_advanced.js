import React from "react";
import Navbar from "../Comp/navbar";
import Testimonial from "../Comp/ApplicationBegInter/testimonial";
import Footer from "../Comp/footer";
import Form from "../Comp/ApplicationForAdvanced/form";


const ApplicationForAdvanced = () => {
    return (
        <div>
            <Navbar/>
            <Form/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}


export default ApplicationForAdvanced