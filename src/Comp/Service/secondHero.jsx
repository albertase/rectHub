import React from "react";
import Flex from "../../Base/flex";
import Box from "../../Base/box";
import {H, P} from "../../Base/text";

const SecondHero = () => {
    return (
        <div>
            <Box bg="#FFFFFF" margin="0 40px" pad="80px 100px" hero>
                <Flex serviceDirection gapy="10px">
                    <Box heroImg>
                        <img src="./Images/AtWork2.svg" alt="hero"/>
                    </Box>
                    <Box>
                        <H fs="32px" width="490px"  lh="39.01px" hero serviceWidth>Recthub Team</H>
                        <P fs="17px" width="550px" lh="42.5px" pad="38px 0" serviceWidth>
                            Our group comprises of elite engineers,  data experts,
                            product developers and quality assurance professionals
                            who assist firms in creating exceptional data centric
                            products. Together, we combine our knowledge and ideas
                            to provide exceptional value to our clients and produce
                            only top-notch products that are highly valued by our clients.
                            We as a team strive for excellence and it is reflected in our
                            products.
                        </P>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default SecondHero