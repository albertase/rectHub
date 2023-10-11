import React from "react";
import Flex from "../../Base/flex";
import Box from "../../Base/box";
import {H, P} from "../../Base/text";

const ForthHero = () => {
    return (
        <div>
            <Box bg="#FFFFFF" margin="0 40px" pad="20px 100px" hero>
                <Flex serviceDirection gapy="10px">
                    <Box heroImg>
                        <img src="./Images/AtWork4.svg" alt="hero"/>
                    </Box>
                    <Box>
                        <H fs="32px" width="490px"  lh="39.01px" hero serviceWidth>Data Science Team</H>
                        <P fs="15px" width="550px" lh="37.5px" pad="28px 0" serviceWidth>
                            Our Data Science team offers a variety of services
                            to help businesses make data-driven decisions. From
                            data collection and cleaning to advanced analytics
                            and machine learning, our team has the skills and
                            expertise to turn data into actionable insights.
                            We specialize in using cutting-edge techniques to
                            uncover hidden patterns and trends, and can help
                            your company improve its decision-making, automate
                            processes, and drive growth. Whether you're looking
                            to build a predictive model, create a data visualization,
                            or implement big data solutions, our team has the experience
                            and knowledge to help you achieve your goals.</P>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default ForthHero