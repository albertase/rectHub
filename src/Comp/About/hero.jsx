import React from "react";
import Box from "../../Base/box";
import { P, H } from "../../Base/text";
import { Button } from "../../Base/button";
import { Image } from "../../Base/image";

const Hero = () => {
  return (
    <div>
      <Box align="center" bg="#F3F4F6" margin="0 40px" pad="80px 100px" about>
        <H width="995px" margin="auto" pad="10px 0" fs="40px" lh="49px" about>
          We're revolutionizing the way data centric products are developed so
          that every expanding company can achieve their maximum prospects!
        </H>

        <P
          width="502px"
          pad="10px 0"
          margin="auto"
          fs="15px"
          lh="150%"
          abouthero
        >
          We concentrate on taking data centric products from concept to success
          by utilizing our specialized skills to produce a product that meets
          the requirements of your desired clients
        </P>

        <a
          href="https://calendly.com/elishatofunmi"
          target="_blank"
          rel="noreferrer"
        >
          <Button primary margin="20px 0">
            Talk to us
          </Button>
        </a>
        <Box>
          <Image src="./Images/about.AVIF" alt="hero" primary width="100%" />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
