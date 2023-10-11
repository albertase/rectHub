import React from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";

const FirstHero = () => {
  return (
    <div>
      <Box bg="#F3F4F6" margin="0 40px" pad="80px 100px" hero>
        <Flex serviceDirection gapy="10px">
          <Box>
            <H fs="30px" width="490px" pad="0 0 30px 0" lh="42.76px" serviceWidth hero>Our team is composed of experts in product development and Machine Learning engineering</H>
            <P fs="15px" width="500px" lh="22.5px" pad="38px 0" serviceWidth>
              Products are our passion. We firmly believe that design is a cooperative effort and by working together, we can create exceptional products.
            </P>

            <a href="https://calendly.com/elishatofunmi" target="_blank" rel="noreferrer"><Button primary>Talk to us</Button></a>
          </Box>

          <Box heroImg>
            <img src="./Images/AtWork.svg" alt="hero"/>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default FirstHero;
