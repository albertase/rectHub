import React, { useState } from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Buttons = styled.button`
padding: 12px 45px;
  cursor: pointer;

  ${props => props.select && css`
    background-color: ${props => props.bg};
    transition: 1s;
  `}
  
  &:hover {
    background: #6BE1BA;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    ${props => props.select && css`
      font-size: 12px;
      padding: 15px 18px;
    `}
    
  } 
`;
const Selection = () => {
  const [choice, setChoice] = useState({
    ai: true,
    ml: false,
    de: false,
    ds: false,
  });


  return (
    <div>

      <Flex aiHeroDirection pad={'0px 0 50px 0'}>
        <Buttons
            onClick={() => setChoice({ ai: true })}
            select
            bg={choice.ai ? "#6be1ba" : "transparent"}
        >Beginner</Buttons>
        <Buttons
            onClick={() => setChoice({ ml: true })}
            select
            bg={choice.ml ? "#6be1ba" : "transparent"}
        >Intermediate</Buttons>
        <Buttons
            onClick={() => setChoice({ de: true })}
            select
            bg={choice.de ? "#6be1ba" : "transparent"}
        >Advanced</Buttons>
      </Flex>

      <Box>
        {choice.ai && <AI />}
        {choice.ml && <ML />}
        {choice.de && <DE />}
        {/*{choice.ds && <DS />}*/}
      </Box>
    </div>
  );
};

const AI = () => {
  const aiVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.9 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={aiVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Beginner</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>Our AI Mentorship Academy is designed specifically
              Are you just starting your journey or want to launch your
              career in the field of Data Science? Our beginner program is designed
              specifically for you. With our expert mentors and practical learning
              approach, you'll learn the basics of data science and be able to apply
              your knowledge to real-world problems. Whether you're looking to launch
              your career or just want to deepen your understanding of this exciting
              field, our beginner program is the perfect starting point. So,  apply
              today and let's get started!</P> <br/>
            <a
                href=""
            >
              <Link to="/application_beginner_intermediate">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

const ML = () => {
  const mlVariant = {
    hidden: {
      opacity: 0,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.9 },
    },
    close: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={mlVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Intermediate</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              Are you looking to take your data science skills to the next level? Our intermediate
              mentorship program is designed for professionals with a solid understanding of the
              basics, but are eager to dive deeper and gain more hands-on experience.
              Our expert mentors will guide you through challenging projects and real-world
              case studies, teaching you advanced techniques and methods to tackle complex
              problems. Whether you're interested in data analysis, machine learning, or big
              data, our program will give you the knowledge and skills you need to succeed.
              So why wait? Apply today and take your data science career to the next level!</P> <br/>
            <a
                href=""
            >
              <Link to="/application_beginner_intermediate">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

const DE = () => {
  const deVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.9 },
    },
    close: {
      x: "-100vw",
      transition: { duration: 0.9 },
    },
  };
  return (
      <motion.div
          variants={deVariant}
          animate="visible"
          initial="hidden"
          exit="close"

      >
    <div>
      <Box bg={'#121212'} width={'100%'} backg={'#121212'} pad={'30px 20px 0px 20px'}>
        <Flex aiHero>
          <H aiHeroColor={'#FCFCFC'} lh={'48.76px'} fs={'40px'}>Advanced</H>
          <Box align="left" width="100%" pad={"0px 80px 90px"} aiHero>
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              Elevate your skills and take your career to the next level with our advanced
              Data Science mentorship program. Our experienced mentors will provide you with
              tailored guidance and hands-on experience to tackle complex data problems.
              Whether you're looking to stay ahead of the latest industry trends or dive
              into cutting-edge techniques, our program will provide you with the tools
              you need to succeed. With a focus on real-world applications, you'll gain
              a deeper understanding of how to leverage data to drive business outcomes
              and make a real impact. Don't miss out on this opportunity to join a community
              of like-minded individuals and unleash your full potential. Apply now and take
              your data science skills to the next level!</P> <br/>
            <a
                href=""
            >
              <Link to="/application_for_advanced">
              <Button primary margin="20px 0">
                Apply now
              </Button>
              </Link>
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
      </motion.div>
  );
};

export default Selection;
