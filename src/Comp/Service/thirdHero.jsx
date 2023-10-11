import React from "react";
import Flex from "../../Base/flex";
import Box from "../../Base/box";
import {H, P} from "../../Base/text";

const ThirdHero = () => {
    return (
        <div>
            <Box bg="#FFFFFF" margin="0 40px" pad="20px 100px" hero>
                <Flex serviceDirection gapy="10px">
                    <Box>
                        <H fs="32px" width="490px"  lh="39.01px" hero serviceWidth>AI/ML Team</H>
                        <P fs="15px" width="550px" lh="37.5px" pad="38px 0" serviceWidth>
                            Our AI/ML team offers a wide range of services to help
                            businesses integrate artificial intelligence and machine
                            learning into their operations. Our team of experts can
                            help with everything from developing custom models and
                            algorithms to implementing pre-built solutions. We can
                            assist with tasks such as natural language processing,
                            computer vision, and predictive analytics. Additionally,
                            we can help businesses to deploy and maintain their AI/ML
                            systems in production environments. Whether you're looking
                            to improve your customer service, optimize your supply chain,
                            or gain insights from your data, our team can help you to
                            achieve your goals.
                        </P>
                    </Box>
                    <Box heroImg>
                        <img src="./Images/AtWork3.svg" alt="hero"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default ThirdHero