import React from "react";
import Box from "../../Base/box";
import { P, H } from "../../Base/text";
import { Button } from "../../Base/button";
import { Image } from "../../Base/image";
import Flex from "../../Base/flex";
import styled from "styled-components";
import Selection from "./selection";


const Buttons = styled.button`
padding: 12px 45px;
  cursor: pointer;
  
  &:hover {
    background: #6BE1BA;
  }
`
const Hero = () => {
  return (
    <div>
      <Box align="center" bg="#F3F4F6" margin="0 40px" pad="20px 100px" hero>
        <H width="495px" margin="auto" pad="10px 0" fs="40px" lh="49px" about>
          Welcome to the Data Engineering track
        </H>

        <P
          width="90%"
          pad="35px 0"
          margin="auto"
          fs="17px"
          lh="31px"
          abouthero
        >
          We believe that with the right guidance and support,
          anyone can master the art of data engineering and create
          a successful career in this field. That's why we have created
          a comprehensive mentorship program that caters to learners at
          every level of expertise.
        </P>
        <P fs={'32px'} lh={'39.01px'} pad={'0px 0 50px 0'}>Select your hypothetical status</P>
        <Selection/>
      </Box>
    </div>
  );
};

export default Hero;
