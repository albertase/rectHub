import React, { useState } from "react";
import Box from "../../Base/box";
import Flex from "../../Base/flex";
import { Button } from "../../Base/button";
import { P, H } from "../../Base/text";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";


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
            <P width={'90%'} pad={"0 0 1px 0"} fs={'17px'} lh={'42.69px'} aiHeroColor={'#FCFCFC'}>
              Our AI Mentorship Academy is designed specifically
              Our mentorship academy is designed specifically for
              beginners like you who are looking to start a career in this
              exciting field. Our program is led by experienced industry
              professionals who will guide you through the basics of machine
              learning, providing you with a solid foundation that you can
              build upon as you grow in your career.
              You'll learn about the different types of algorithms and techniques
              used in machine learning, as well as the practical applications of
              these technologies in real-world settings. You'll also gain hands-on
              experience with cutting-edge tools and technologies, so you can develop
              the skills you need to make an impact in your career.</P> <br/>
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
              if you're at an intermediate level, our program is perfect for you. Our experienced
              mentors will guide you in taking your skills to the next level and expanding
              your knowledge of machine learning. You'll be able to work on real-world projects
              and gain hands-on experience in the field. Our curriculum is designed to challenge
              you and help you stay ahead of the curve. With personalized feedback and support,
              you'll be able to overcome any obstacles and achieve your goals. Join us today
              and take your machine learning skills to the next level!</P> <br/>
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
              Are you a seasoned data scientist or engineer looking to take your skills to the next
              level? Our program is designed specifically for advanced professionals like you,
              who want to stay ahead of the curve in the fast-paced field of machine learning.
              Our expert mentors will guide you through complex ML algorithms, deep learning
              models, and cutting-edge techniques, while providing personalized feedback and
              support to help you achieve your goals. Whether you want to advance your career,
              work on challenging projects, or contribute to cutting-edge research, this program
              is the ideal platform to help you succeed. Apply now and join our community of advanced
              ML professionals!</P> <br/>
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
