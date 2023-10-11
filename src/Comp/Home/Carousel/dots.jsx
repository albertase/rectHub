import React from "react";
import Box from "../../../Base/box";

function Dots({ activeIndex, onclick, sliderImage }) {
    return (
        <Box className="all-dots" align="center" pad="25px 0">
            {sliderImage.map((slide, index) => (
                    <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </Box>
    );
}

export default Dots;