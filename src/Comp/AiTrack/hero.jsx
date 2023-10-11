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
          Welcome to the Artificial Intelligence track
        </H>

        <P
          width="90%"
          pad="35px 0"
          margin="auto"
          fs="17px"
          lh="31px"
          abouthero
        >
          We believe in providing hands-on training and support
          to individuals looking to further their knowledge and
          expertise in Artificial Intelligence. Our mentorship
          program is designed to offer a personalized approach
          to learning, providing you with one-on-one support from
          experienced AI professionals.
        </P>

        <P fs={'32px'} lh={'39.01px'} pad={'0px 0 50px 0'}>Select your hypothetical status</P>
        <Selection/>
        {/*<Flex aiHeroDirection pad={'0px 0 50px 0'}>*/}
        {/*  <Buttons style={{background: '#6BE1BA'}}>Beginner</Buttons>*/}
        {/*  <Buttons>Intermediate</Buttons>*/}
        {/*  <Buttons>Advanced</Buttons>*/}
        {/*</Flex>*/}
        {/*<Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>*/}
        {/*  <Flex aiHero>*/}
        {/*    <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Beginner</H>*/}
        {/*    <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>*/}
        {/*    <P width={'90%'} pad={"0 0 50px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>Our AI Mentorship Academy is designed specifically*/}
        {/*      for beginners like you. Our experienced mentors will*/}
        {/*      guide you through the basics of AI, helping you understand*/}
        {/*      the concepts and build a strong foundation. Whether you*/}
        {/*      are a complete beginner or have some basic knowledge, our*/}
        {/*      program is tailored to suit your needs. Start your journey*/}
        {/*      to becoming an AI expert today with our beginner-friendly*/}
        {/*      mentorship program. Enroll now and take the first step*/}
        {/*      towards a successful career in Artificial Intelligence.</P> <br/><br/>*/}
        {/*    <a*/}
        {/*        href="https://calendly.com/elishatofunmi"*/}
        {/*        target="_blank"*/}
        {/*        rel="noreferrer"*/}
        {/*    >*/}
        {/*      <Button primary margin="20px 0">*/}
        {/*        Apply now*/}
        {/*      </Button>*/}
        {/*    </a>*/}
        {/*    </Box>*/}

        {/*  </Flex>*/}
        {/*</Box>*/}


      </Box>
    </div>
  );
};

export default Hero;
