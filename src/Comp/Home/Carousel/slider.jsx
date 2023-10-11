import React, { useEffect, useState } from "react";
import SliderContent from "./sliderContent";
import Dots from "./dots";
// import Arrows from "./arrows";
import sliderImage from "./sliderImage";
import Box from "../../../Base/box";


const len = sliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);


    return (
        <Box pad='20px 80px' slideBoxContainer>
        <div className="slider-container">

            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />

            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
        </Box>

    );
}

export default Slider;