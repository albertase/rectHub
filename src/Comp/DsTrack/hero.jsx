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
          Welcome to the Data Science track
        </H>

        <P
          width="90%"
          pad="35px 0"
          margin="auto"
          fs="17px"
          lh="31px"
          abouthero
        >
          We're here to help you take your skills to
          the next level and achieve your career goals.
          Whether you're a beginner, intermediate, or
          advanced learner, our mentorship program offers
          a tailored approach to help you reach your full potential.
        </P>

        <P fs={'32px'} lh={'39.01px'} pad={'0px 0 50px 0'}>Select your hypothetical status</P>
        <Selection/>
      </Box>
    </div>
  );
};

export default Hero;
