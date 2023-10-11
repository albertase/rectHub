import React from "react";
import Flex from "../../Base/flex";
import Box from "../../Base/box";
import {H, P} from "../../Base/text";

const LastHero = () => {
    return (
        <div>
            <Box bg="#FFFFFF" margin="0 40px 40px" pad="20px 100px" hero>
                <Flex direction="column">
                    <Box>
                        <H fs="32px" width="490px"  lh="39.01px" hero>Our Services</H>
                        <P fs="17px" width="100%" lh="42.5px" pad="28px 0">
                            We help organizations streamline their data operations
                            by offering expert support and resources. This can include
                            everything from augmenting in-house data teams with additional
                            talent, to providing complete data solutions and services.
                            The team's focus is on delivering business intelligence and
                            actionable insights that drive growth and success for the
                            client. Our services are customized to meet the unique needs
                            and goals of each organization, providing a tailored approach
                            to data management and analysis.
                        </P>
                    </Box>
                    <Box heroImg>
                        <img src="./Images/AtWork6.svg" alt="hero"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default LastHero