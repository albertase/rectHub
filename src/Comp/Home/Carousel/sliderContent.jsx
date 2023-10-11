import React from "react";
import { motion } from "framer-motion";
import { Image } from "../../../Base/image";
import Box from "../../../Base/box";
import Flex from "../../../Base/flex";
import { H, P } from "../../../Base/text";



function SliderContent({ activeIndex, sliderImage }) {
    return (
        <div>
            <P align="center" fs="45px" lh="42.76px" pad="50px 0" slideHeader>
                Proud to collaborate with diverse clients
            </P>

            <section className="section">
                {sliderImage.map((slide, index) => (
                    <motion.div
                        key={index}
                        className={
                            index === activeIndex ? "slide active" : "slide inactive"
                        }
                        initial={index === activeIndex ? "visible" : "hidden"}
                        animate={index === activeIndex ? "visible" : "hidden"}
                        exit="hidden"
                        variants={{
                            visible: { opacity: 1, transition: { duration: 1.0, ease: "easeInOut" } },
                            hidden: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                        }}
                        transition={{ duration: 1.9 }}

                    >
                        <Box pad="20px 80px" carouselPad>
                        <Flex direction="row" gapy="20px" carouselContent wraps>
                            <Box slideAlign>
                                <img src={slide.urls} alt="review" width="100px" />
                            </Box>
                            <Box pad="30px 0" slideAlign>
                                <H fs="20px" lh="24.38px">{slide.name}</H>
                                <P aiHeroColor="#908E8E">{slide.description}</P>
                            </Box>
                        </Flex>
                        <P pad="50px 0" fs="24px" lh="48.3px" slideText>
                            {slide.content}
                        </P>
                        </Box>

                    </motion.div>
                ))}

            </section>
        </div>
    );
}

export default SliderContent;